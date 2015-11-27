import React from 'react' // required for JSX


export default class NameForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {currentValue: ''}
  }

  updateValue (value) {
    this.setState({currentValue: value})
  }

  onChange (e) {
    this.updateValue(e.target.value)
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.currentValue)
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

