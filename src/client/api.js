import fetch from 'isomorphic-fetch'

export function fetchContacts () {
 return fetch('/api/contacts').then(req => req.json())
}

export function fetchContactInfo (id) {
 return fetch(`/api/contacts/${id}`).then(req => req.json())
}

export function postContact (contact) {
 return fetch('/api/contacts', {
   method: 'post',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(contact)
 }).then(req => req.json())
}
