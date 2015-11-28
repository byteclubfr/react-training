import React from 'react' // required for JSX
import Contact from './Contact'
import NewContactForm from './NewContactForm'
import { connect } from 'react-redux'
import * as api from '../client/api' // There is a huge flaw here, as this code should be executed server-side too
import { fetchContacts } from '../actions/contacts'


class ContactList extends React.Component {
  renderContact (contact) {
    return <Contact key={ contact.id } id={ contact.id } name={ contact.name } friend={ contact.friend } />
  }

  componentWillMount () {
    // Another issue here: how to NOT load data when server-rendered?
    if (!this.props.contacts.length) {
      this.props.fetchContacts(api)
    }
  }

  render () {
    if (this.props.loading) {
      return <div>Loading contacts…</div>
    }

    var contacts = this.props.contacts.map((contact) => this.renderContact(contact))

    return (
      <div className="contacts">
        <div className="contact-list">
          <ul>
            { contacts }
          </ul>
          <NewContactForm />
        </div>
        { this.props.children }
      </div>
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

const actions = { fetchContacts }

export default connect(mapStateToProps, actions)(ContactList)
