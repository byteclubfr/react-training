import React from 'react'
import JVent from 'jvent'
import dispatcher from './dispatcher'


var state = {
  contacts: [],
  formValue: '',
  contactNextId: 0
}


// Business logic

dispatcher.on('RECEIVE_CONTACTS', (contacts) => {
  state.contacts = contacts
  state.contactNextId = Math.max.apply(null, contacts.map((c) => c.id)) + 1
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
    state.contacts.push({
      id: state.contactNextId,
      name: contact.name,
      friend: !!contact.friend
    })
    state.contactNextId ++
    notify()
  }
})

dispatcher.on('TOGGLE_FRIEND', (id) => {
  var found = state.contacts.find(c => c.id === id)
  if (!found) {
    console.error('Contact not found')
  } else {
    found.friend = !found.friend
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

export function connect (Component, mapStateToProps) {
  return class ConnectedComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = mapStateToProps(getState())
    }
    componentWillMount () {
      this.unsubscribeStore = subscribe((state) => this.setState(mapStateToProps(state)))
    }
    componentWillUnmount () {
      this.unsubscribeStore()
    }
    render () {
      return <Component { ...this.props } { ...this.state } />
    }
  }
}
