import React from 'react' // required for JSX
import { connect } from 'react-redux'
import { updateFormValue } from '../actions/ui'
import { postContact } from '../actions/contacts'
import * as api from '../client/api'


class NewContactForm extends React.Component {

  updateValue (value) {
    this.props.updateFormValue(value)
  }

  onChange (e) {
    this.updateValue(e.target.value)
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.postContact(api, {name: this.props.currentValue, friend: false})
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
  postContact: React.PropTypes.func.isRequired,
  updateFormValue: React.PropTypes.func.isRequired,
  currentValue: React.PropTypes.string.isRequired
}


function mapStateToProps (state) {
  return {currentValue: state.ui.formValue}
}

var actions = { postContact, updateFormValue }

export default connect(mapStateToProps, actions)(NewContactForm)
