import { createAction } from 'redux-actions'

export const toggleFriend = createAction('TOGGLE_FRIEND', (id) => id)
export const addContact = createAction('ADD_CONTACT', (contact) => contact)

const receiveContacts = createAction('RECEIVE_CONTACTS', (contacts) => contacts)
const requestContacts = createAction('REQUEST_CONTACTS')
export const fetchContacts = () => (dispatch) => {
  dispatch(requestContacts())

  // Here some Ajax request
  setTimeout(() => dispatch(receiveContacts([
    { id: 0, name: "John", friend: false },
    { id: 1, name: "Lilian", friend: true },
    { id: 2, name: "Thomas", friend: true },
    { id: 3, name: "Bruno", friend: true },
    { id: 4, name: "Nicolas", friend: true }
  ])), 500)
}
