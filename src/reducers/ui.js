import createReducer from '../helpers/create-reducer'

const initialState = {
  formValue: ''
}

export default createReducer(initialState, {

  UPDATE_FORM_VALUE: (state, value) => ({
    ...state,
    formValue: value
  })

})
