import * as api from './api'
import { fetchContacts, addContact } from '../actions/contacts'
import configureStore from '../configure-store'
import { contacts as db } from '../data/db.js'

// store helpers

function getPopulatedStore () {
  const store = configureStore()
  return store.dispatch(fetchContacts(api)).then(() => store)
}
function getStoredContacts () {
  return getPopulatedStore().then((store) => store.getState().contacts.contacts)
}

// express route handlers

export function getContacts (req, res) {
  getStoredContacts().then((contacts) => res.json(contacts), (err) => console.error(err))
}

export function getContact (req, res) {
  getStoredContacts().then((contacts) => {
    const contact = contacts[req.params.id]
    contact.address = 'Contact #' + req.params.id + '\'s address from DB'
    res.json(contact)
  })
}

export function postContact (req, res) {
  getPopulatedStore().then((store) => {
    store.dispatch(addContact(req.body))
    const contacts = store.getState().contacts.contacts
    const newContact = contacts[contacts.length - 1]
    // this push should be a dedicated API
    db.push(newContact)
    res.json(newContact)
  })
}
