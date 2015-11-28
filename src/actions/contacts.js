import { createAction } from 'redux-actions'

export const toggleFriend = createAction('TOGGLE_FRIEND', (id) => id)
export const addContact = createAction('ADD_CONTACT', (contact) => contact)

const receiveContacts = createAction('RECEIVE_CONTACTS', (contacts) => contacts)
const requestContacts = createAction('REQUEST_CONTACTS')
export const fetchContacts = (api) => (dispatch) => {
  dispatch(requestContacts())
  return api.fetchContacts().then((data) => dispatch(receiveContacts(data)))
}

const receiveContactInfo = createAction('RECEIVE_CONTACT_INFO', (id, info) => ({id: Number(id), info}))
const requestContactInfo = createAction('REQUEST_CONTACT_INFO')
export const fetchContactInfo = (api, id) => (dispatch) => {
  dispatch(requestContactInfo(id))
  return api.fetchContactInfo(id).then((info) => dispatch(receiveContactInfo(id, info)))
}
