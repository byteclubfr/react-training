import React from 'react' // required for JSX
import Contact from './Contact'
import { connect } from 'react-redux'


class ContactList extends React.Component {
  renderContact (contact) {
    return <Contact key={ contact.id } id={ contact.id } name={ contact.name } friend={ contact.friend } />
  }

  render () {
    if (this.props.loading) {
      return <div>Loading contacts…</div>
    }

    var contacts = this.props.contacts.map((contact) => this.renderContact(contact))

    return (
      <ul className="contacts">
        { contacts }
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      friend: React.PropTypes.bool.isRequired
    })).isRequired,
  loading: React.PropTypes.bool.isRequired
}


function mapStateToProps (state) {
  return {
    contacts: state.contacts.contacts,
    loading: state.ui.loadingContacts
  }
}

export default connect(mapStateToProps)(ContactList)
