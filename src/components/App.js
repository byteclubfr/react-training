import React from 'react' // required for JSX
import Header from './Header'
import ContactList from './ContactList'
import NameForm from './NameForm'


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {contacts: props.initialContacts}
  }

  addContact (name) {
    if (this.state.contacts.find(c => c.name === name)) {
      console.error('Contact already added')
      return false
    }

    this.setState({contacts: this.state.contacts.concat([{
      name,
      friend: false
    }])})
    return true
  }

  render () {
    return (
      <div>
        <Header />
        <ContactList contacts={ this.state.contacts } />
        <NameForm onSubmit={ (name) => this.addContact(name) } />
      </div>
    )
  }
}


App.propTypes = {
  initialContacts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friend: React.PropTypes.Bool
    })
  )
}
