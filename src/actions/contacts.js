export function toggleFriend (id) {
  return { type: 'TOGGLE_FRIEND', payload: id }
}

export function addContact (contact) {
  return { type: 'ADD_CONTACT', payload: contact }
}

export function receiveContacts (contacts) {
  return { type: 'RECEIVE_CONTACTS', payload: contacts }
}
