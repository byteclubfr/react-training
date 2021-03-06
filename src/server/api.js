import { contacts } from '../data/db.js'

export function fetchContacts () {
  return new Promise((resolve, reject) => global.setTimeout(() => resolve(contacts), 500))
}

export function fetchContactInfo (id) {
  return new Promise((resolve, reject) => global.setTimeout(() => resolve({
    address: 'Contact #' + id + '\'s address from DB'
  }), 500))
}
