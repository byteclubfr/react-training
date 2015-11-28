import { fetchContacts, fetchContactInfo } from './actions/contacts'
import { findContact } from './components/ContactDetails'

export function loadContacts (api, dispatch, getState) {
  // This test really should leave
  // What we really want is test if it's first rendering
  if (getState().contacts.contacts.length === 0) {
    return dispatch(fetchContacts(api))
  }
}

export function loadContactInfo (api, dispatch, getState, { params }) {
  // Check if contact info has already been loaded
  const contact = findContact({
    contacts: getState().contacts.contacts,
    params
  })
  // Contact exists but no loaded info: fetch now
  if (contact && !contact.info) {
    return dispatch(fetchContactInfo(api, params.id))
  }
}
