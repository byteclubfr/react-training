import React from 'react' // required for JSX
import Contact from './Contact'
import { connect } from '../store'


class ContactList extends React.Component {
  renderContact (contact) {
    return <Contact key={ contact.id } id={ contact.id } name={ contact.name } friend={ contact.friend } />
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

ContactList.propTypes = React.PropTypes.arrayOf(
  React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    friend: React.PropTypes.bool.isRequired
  })
).isRequired

export default connect(ContactList, (state) => {
  return ({contacts: state.contacts})
})
