import React from 'react' // required for JSX
import Contact from './Contact'


export default class ContactList extends React.Component {

  renderContact (contact) {
    return <Contact key={ contact.name } name={ contact.name } initialIsFriend={ !!contact.friend } />
  }

  render () {
    var contacts = this.props.contacts.map((contact) => this.renderContact(contact))

    return (
      <ul className="contacts">
        { contacts }
      </ul>
    )
  }
}


ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friend: React.PropTypes.Bool
    })
  )
}
