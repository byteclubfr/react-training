import createReducer from '../helpers/create-reducer'

const initialState = {
  formValue: '',
  loadingContacts: false
}

export default createReducer(initialState, {

  UPDATE_FORM_VALUE: (state, value) => ({
    ...state,
    formValue: value
  }),

  REQUEST_CONTACTS: (state) => ({ ...state, loadingContacts: true }),
  RECEIVE_CONTACTS: (state) => ({ ...state, loadingContacts: false })

})
