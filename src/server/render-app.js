import React from 'react' // required for JSX
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import * as api from './api'
import { readFileSync } from 'fs'
import { Router, match, RoutingContext } from 'react-router'
import configureRoutes from '../configure-routes'


const INDEX_HTML = readFileSync(__dirname + '/../../static/index.html', 'utf8')

export default (req, res, next) => {
  // Fetch data depending on URL, that may be hard to maintain
  const store = configureStore()
  var pending = []
  const addPending = (promise) => pending.push(promise)
  const routes = configureRoutes(api, store, addPending)

  match({ routes, location: req.url }, (error, redirection, props) => {
    Promise.all(pending).then(() => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirection) {
        res.redirect(302, redirection.pathname + redirection.search)
      } else if (props) {
        renderRoute(req, res, props, store)
      } else {
        res.status(404).send('Not found')
      }
    }).catch(next)
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
