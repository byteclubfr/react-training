import { fetchContacts, fetchContactInfo } from './actions/contacts'
import { findContact } from './components/ContactDetails'

export function loadContacts (api, dispatch) {
  return dispatch(fetchContacts(api))
}

export function loadContactInfo (api, dispatch, getState, { params }) {
  return dispatch(fetchContactInfo(api, params.id))
}
