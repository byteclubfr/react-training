import React from 'react' // required for JSX
import Header from './Header'
import ContactList from './ContactList'


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {contacts: props.initialContacts}
  }

  render () {
    return (
      <div>
        <Header />
        <ContactList contacts={ this.state.contacts } />
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
