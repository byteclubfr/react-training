import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import Home from './components/Home'
import { loadContacts, loadContactInfo } from './data-loaders'
import dataLoaderToHook from './helpers/data-loader-hook'

export default (api, { dispatch, getState }, pendingCallback) => {
  const hook = dataLoaderToHook(api, { dispatch, getState }, pendingCallback)

  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="contacts" component={ ContactList } onEnter={ hook(loadContacts, true) }>
        <Route path=":id" component={ ContactDetails } onEnter={ hook(loadContactInfo) } />
      </Route>
    </Route>
  )
}
