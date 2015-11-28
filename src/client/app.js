import React from 'react' // required for JSX
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts } from '../actions/contacts'
import * as api from './api'
import { Router } from 'react-router'
import configureRoutes from '../configure-routes'
import createBrowserHistory from 'history/lib/createBrowserHistory'


const store = configureStore(window.APP_STATE)

const routes = configureRoutes(api, store)

const history = createBrowserHistory()
const root = (
  <Provider store={ store }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>
)

render(root, document.getElementById('app'))
