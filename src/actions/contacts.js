import { createAction } from 'redux-actions'

export const toggleFriend = createAction('TOGGLE_FRIEND', (id) => id)
export const addContact = createAction('ADD_CONTACT', (contact) => contact)

const receiveContacts = createAction('RECEIVE_CONTACTS', (contacts) => contacts)
const requestContacts = createAction('REQUEST_CONTACTS')
export const fetchContacts = (api) => (dispatch) => {
  dispatch(requestContacts())
  api.fetchContacts().then((data) => dispatch(receiveContacts(data)))
}
