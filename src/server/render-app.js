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

  // How can I load data? This will process asynchronously and I have no way to listen for the end :(
  // plus, it's supposed to execute client-side code
  // store.dispatch(fetchContacts())

  var state = store.getState()
  // For now, we'll manually set "loadingContacts" to true so that it matches client-side state
  state.ui.loadingContacts = true
  const stateScript = '<script>window.APP_STATE=' + JSON.stringify(state) + '</script>'

  const root = <Provider store={ store }><App /></Provider>
  const div = renderToString(root)

  const html = INDEX_HTML
    .replace(/<!-- APP_HERE -->/, div)
    .replace(/<!-- STATE_HERE -->/, stateScript)

  res.send(html)
}
