import fetch from 'isomorphic-fetch'

export function fetchContacts () {
 return fetch('/api/contacts.json').then(req => req.json())
}

export function fetchContactInfo (id) {
 return fetch(`/api/contacts/${id}.json`).then(req => req.json())
}
