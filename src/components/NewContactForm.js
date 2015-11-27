import React from 'react' // required for JSX
import { subscribe, getState } from '../store'
import dispatcher from '../dispatcher'


export default class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {currentValue: getState().formValue}
  }
  componentWillMount () {
    this.unsubscribeStore = subscribe((state) => this.setState({currentValue: state.formValue}))
  }
  componentWillUnmount () {
    this.unsubscribeStore()
  }

  updateValue (value) {
    dispatcher.emit('UPDATE_FORM_VALUE', value)
  }

  onChange (e) {
    this.updateValue(e.target.value)
  }

  onSubmit (e) {
    e.preventDefault()
    dispatcher.emit('ADD_CONTACT', {name: this.state.currentValue, friend: false})
    this.updateValue('')
  }

  render () {
    return (
      <form onSubmit={ (e) => this.onSubmit(e) }>
        <input type="text" onChange={ (e) => this.onChange(e) } value={ this.state.currentValue } placeholder="Add a contact" />
      </form>
    )
  }
}

