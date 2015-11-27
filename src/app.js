import React from 'react' // required for JSX
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './configure-store'
import { receiveContacts } from './actions/contacts'


var store = configureStore()
var root = <Provider store={ store }><App /></Provider>
render(root, document.getElementById('app'))

// Asynchronously load data
setTimeout(() => store.dispatch(receiveContacts([
  { id: 0, name: "John", friend: false },
  { id: 1, name: "Lilian", friend: true },
  { id: 2, name: "Thomas", friend: true },
  { id: 3, name: "Bruno", friend: true },
  { id: 4, name: "Nicolas", friend: true }
])), 500)
