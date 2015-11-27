import React from 'react' // required for JSX
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts } from '../actions/contacts'
import * as api from './api'
import { readFileSync } from 'fs'


const INDEX_HTML = readFileSync(__dirname + '/../../static/index.html', 'utf8')

export default (req, res) => {
  const store = configureStore()

  // Load contacts and wait for promise to be resolved, which means state is ready
  store.dispatch(fetchContacts(api)).then(() => {
    const state = store.getState()
    const stateScript = '<script>window.APP_STATE=' + JSON.stringify(state) + '</script>'

    const root = <Provider store={ store }><App /></Provider>
    const div = renderToString(root)

    const html = INDEX_HTML
      .replace(/<!-- APP_HERE -->/, div)
      .replace(/<!-- STATE_HERE -->/, stateScript)

    res.send(html)
  })
}
