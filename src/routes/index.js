import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import ContactList from '../components/ContactList'
import ContactDetails from '../components/ContactDetails'
import Home from '../components/Home'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="contacts" component={ ContactList }>
      <Route path=":id" component={ ContactDetails } />
    </Route>
  </Route>
)
