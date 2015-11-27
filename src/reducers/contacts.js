import createReducer from '../helpers/create-reducer'

const initialState = {
  contacts: [],
  nextId: 0
}

export default createReducer(initialState, {

  TOGGLE_FRIEND: (state, id) => ({
    ...state,
    contacts: state.contacts.map((c) =>
      c.id === id ? { ...c, friend: !c.friend } : c
    )
  }),

  ADD_CONTACT: (state, contact) => ({
    ...state,
    contacts: state.contacts.concat([{ ...contact, id: state.nextId }]),
    nextId: state.nextId + 1
  }),

  RECEIVE_CONTACTS: (state, contacts) => ({
    ...state,
    contacts,
    nextId: Math.max(...contacts.map((c) => c.id)) + 1
  })

})
