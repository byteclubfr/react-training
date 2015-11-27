const initialState = {
  contacts: {
    contacts: [],
    nextId: 0
  },
  ui: {
    formValue: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_FORM_VALUE':
    // Use ES6 spread operator to create a new object
    // Equivalent with Object.assign:
    // Object.assign({}, state, {ui: Object.assign({}, state.ui, {formValue: action.payload})})
    return {
      ...state,
      ui: {
        ...state.ui,
        formValue: action.payload
      }
    }

    case 'TOGGLE_FRIEND':
    return {
      ...state,
      contacts: {
        ...state.contacts,
        contacts: state.contacts.contacts.map((c) => (
          c.id === action.payload ? { ...c, friend: !c.friend } : c
        ))
      }
    }

    case 'ADD_CONTACT':
    return {
      ...state,
      contacts: {
        ...state.contacts,
        contacts: state.contacts.contacts.concat([{
          ...action.payload,
          id: state.contacts.nextId
        }]),
        nextId: state.contacts.nextId + 1
      }
    }

    case 'RECEIVE_CONTACTS':
    return {
      ...state,
      contacts: {
        contacts: action.payload,
        nextId: Math.max(...action.payload.map((c) => c.id)) + 1
      }
    }

    default:
    return state
  }
}
