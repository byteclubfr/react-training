import React from 'react' // required for JSX
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts, fetchContactInfo } from '../actions/contacts'
import * as api from './api'
import { readFileSync } from 'fs'
import { Router, match, RoutingContext } from 'react-router'
import routes from '../routes'


const INDEX_HTML = readFileSync(__dirname + '/../../static/index.html', 'utf8')

export default (req, res) => {
  // Fetch data depending on URL, that may be hard to maintain
  const store = configureStore()
  var fetching = []
  if (req.url.match(/\/contacts/)) {
    // Fetch contacts list
    fetching.push(store.dispatch(fetchContacts(api)))
  }
  const isContactDetails = req.url.match(/\/contacts\/([0-9]+)$/)
  if (isContactDetails) {
    // Fetch contact details
    fetching.push(store.dispatch(fetchContactInfo(api, isContactDetails[1])))
  }

  Promise.all(fetching).then(() => {
    match({ routes, location: req.url }, (error, redirection, props) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirection) {
        res.redirect(302, redirection.pathname + redirection.search)
      } else if (props) {
        renderRoute(req, res, props, store)
      } else {
        res.status(404).send('Not found')
      }
    })
  })
}

function renderRoute (req, res, props, store) {
  const state = store.getState()
  const stateScript = '<script>window.APP_STATE=' + JSON.stringify(state) + '</script>'

  const root = <Provider store={ store }><RoutingContext { ...props } /></Provider>
  const div = renderToString(root)

  const html = INDEX_HTML
    .replace(/<!-- APP_HERE -->/, div)
    .replace(/<!-- STATE_HERE -->/, stateScript)

  res.send(html)
}
