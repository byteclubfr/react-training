import { createAction } from 'redux-actions'

export const toggleFriend = createAction('TOGGLE_FRIEND', (id) => id)
export const addContact = createAction('ADD_CONTACT', (contact) => contact)
export const receiveContacts = createAction('RECEIVE_CONTACTS', (contacts) => contacts)
