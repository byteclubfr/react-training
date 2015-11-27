const initialState = {
  formValue: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_FORM_VALUE':
    // Use ES6 spread operator to create a new object
    // Equivalent with Object.assign:
    // Object.assign({}, state, {ui: Object.assign({}, state.ui, {formValue: action.payload})})
    return {
      ...state,
      formValue: action.payload
    }

    default:
    return state
  }
}
