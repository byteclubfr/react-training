import { addContact } from '../actions/contacts'
import getPopulatedStore from './store'

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
    res.json(contacts[contacts.length - 1])
  })
}
