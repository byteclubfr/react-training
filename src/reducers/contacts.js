const initialState = {
  contacts: [],
  nextId: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_FRIEND':
    return {
      ...state,
      contacts: state.contacts.map((c) => (
        c.id === action.payload ? { ...c, friend: !c.friend } : c
      ))
    }

    case 'ADD_CONTACT':
    return {
      ...state, // useless, but still a good habit
      contacts: state.contacts.concat([{
        ...action.payload,
        id: state.nextId
      }]),
      nextId: state.nextId + 1
    }

    case 'RECEIVE_CONTACTS':
    return {
      ...state, // useless but a good habit
      contacts: action.payload,
      nextId: Math.max(...action.payload.map((c) => c.id)) + 1
    }

    default:
    return state
  }
}
