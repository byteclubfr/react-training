import React from 'react' // required for JSX
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts } from '../actions/contacts'
import * as api from './api'
import { readFileSync } from 'fs'
import { Router, match, RoutingContext } from 'react-router'
import routes from '../routes'


const INDEX_HTML = readFileSync(__dirname + '/../../static/index.html', 'utf8')

export default (req, res) => {
  const store = configureStore()

  match({ routes, location: req.url }, (error, redirection, props) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirection) {
      res.redirect(302, redirection.pathname + redirection.search)
    } else if (props) {
      renderRoute(res, store, props)
    }
  })
}

function renderRoute (res, store, props) {
  // Load contacts and wait for promise to be resolved, which means state is ready
  store.dispatch(fetchContacts(api)).then(() => {
    const state = store.getState()
    const stateScript = '<script>window.APP_STATE=' + JSON.stringify(state) + '</script>'

    const root = <Provider store={ store }><RoutingContext { ...props } /></Provider>
    const div = renderToString(root)

    const html = INDEX_HTML
      .replace(/<!-- APP_HERE -->/, div)
      .replace(/<!-- STATE_HERE -->/, stateScript)

    res.send(html)
  })
}
