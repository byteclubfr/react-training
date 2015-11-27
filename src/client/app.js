import React from 'react' // required for JSX
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts } from '../actions/contacts'
import * as api from './api'
import { Router } from 'react-router'
import routes from '../routes'
import createBrowserHistory from 'history/lib/createBrowserHistory'


const store = configureStore(window.APP_STATE)

if (!window.APP_STATE) {
  // No server-side rendering: we need to fetch initial data
  store.dispatch(fetchContacts(api))
}

const history = createBrowserHistory()
const root = (
  <Provider store={ store }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>
)

render(root, document.getElementById('app'))
