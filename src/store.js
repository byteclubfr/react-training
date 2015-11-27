import JVent from 'jvent'
import dispatcher from './dispatcher'


var state = {
  contacts: [],
  formValue: ''
}


// Business logic

dispatcher.on('RECEIVE_CONTACTS', (contacts) => {
  state.contacts = contacts
  notify()
})

dispatcher.on('UPDATE_FORM_VALUE', (value) => {
  state.nameFormValue = value
  notify()
})

dispatcher.on('ADD_CONTACT', (contact) => {
  if (state.contacts.find(c => c.name === contact.name)) {
    console.error('Contact already added')
  } else {
    state.contacts.push(contact)
    notify()
  }
})


// Generic implementation

var store = new JVent()

export function subscribe (handler) {
  store.on('CHANGE', handler)

  // Return the "unsubscribe" function
  return () => store.off('CHANGE', handler)
}

export function getState () {
  return state
}

function notify () {
  store.emit('CHANGE', state)
}

