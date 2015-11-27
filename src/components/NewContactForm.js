import React from 'react' // required for JSX
import { connect } from '../store'
import dispatcher from '../dispatcher'


class NewContactForm extends React.Component {

  updateValue (value) {
    dispatcher.emit('UPDATE_FORM_VALUE', value)
  }

  onChange (e) {
    this.updateValue(e.target.value)
  }

  onSubmit (e) {
    e.preventDefault()
    dispatcher.emit('ADD_CONTACT', {name: this.props.currentValue, friend: false})
    this.updateValue('')
  }

  render () {
    return (
      <form onSubmit={ (e) => this.onSubmit(e) }>
        <input type="text" onChange={ (e) => this.onChange(e) } value={ this.props.currentValue } placeholder="Add a contact" />
      </form>
    )
  }
}

NewContactForm.propTypes = {
  currentValue: React.PropTypes.string.isRequired
}

export default connect(NewContactForm, (state) => ({currentValue: state.formValue}))
