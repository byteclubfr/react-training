import * as api from './api'
import { fetchContacts } from '../actions/contacts'
import configureStore from '../configure-store'

function getStoredContacts () {
  const store = configureStore()
  return store
    .dispatch(fetchContacts(api))
    .then(() => store.getState().contacts.contacts)
}

// express route handlers

export function getContacts (req, res) {
  getStoredContacts().then((contacts) => res.json(contacts))
}

export function getContact (req, res) {
  getStoredContacts().then((contacts) => res.json(contacts[req.params.id]))
}
