import React from 'react' // required for JSX
import { render } from 'react-dom'
import App from './components/App'


var root = <App initialContacts={ [] } />
var app = render(root, document.getElementById('app'))

// Asynchronously load data
setTimeout(() => app.setState({contacts: [
  { name: "John" },
  { name: "Lilian", friend: true },
  { name: "Thomas", friend: true },
  { name: "Bruno", friend: true },
  { name: "Nicolas", friend: true }
]}), 500)
