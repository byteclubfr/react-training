import React from 'react' // required for JSX
import { render } from 'react-dom'
import App from './components/App'
import { getState } from './store'
import dispatcher from './dispatcher'


var root = <App />
render(root, document.getElementById('app'))

// Asynchronously load data
setTimeout(() => dispatcher.emit('RECEIVE_CONTACTS', [
  { id: 0, name: "John", friend: false },
  { id: 1, name: "Lilian", friend: true },
  { id: 2, name: "Thomas", friend: true },
  { id: 3, name: "Bruno", friend: true },
  { id: 4, name: "Nicolas", friend: true }
]), 500)
