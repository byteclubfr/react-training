import { createAction } from 'redux-actions'

export const updateFormValue = createAction('UPDATE_FORM_VALUE', (value) => value)
