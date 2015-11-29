import * as api from './api'
import { fetchContacts } from '../actions/contacts'
import configureStore from '../configure-store'

var store

export default function getPopulatedStore () {
  // cached
  if (store) return Promise.resolve(store)

  // populate
  store = configureStore()
  return store.dispatch(fetchContacts(api)).then(() => store)
}

