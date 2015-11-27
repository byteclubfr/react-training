import React from 'react' // required for JSX
import { render } from 'react-dom'
import App from './components/App'


var contacts = [
  { name: "John" },
  { name: "Lilian", friend: true },
  { name: "Thomas", friend: true },
  { name: "Bruno", friend: true },
  { name: "Nicolas", friend: true }
]

var root = <App initialContacts={ contacts } />
render(root, document.getElementById('app'))
