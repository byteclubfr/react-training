import React from 'react' // required for JSX
import { connect } from 'react-redux'
import * as api from '../client/api' // There is a huge flaw here, as this code should be executed server-side too
import { fetchContactInfo } from '../actions/contacts'


class ContactDetails extends React.Component {
  getInfo ({ info }) {
    if (!info) {
      return <p>Additional info not loaded yet…</p>
    } else {
      return <p>Address: { info.address }</p>
    }
  }

  render () {
    const contact = findContact(this.props)
    if (!contact) {
      return <div className="contact-details contact-not-found">Contact not found</div>
    }

    return (
      <div className="contact-details">
        <h2>{ contact.name }</h2>
        <p>Is my friend? { contact.friend ? 'Yes' : 'No' }</p>
        { this.getInfo(contact) }
      </div>
    )
  }
}

ContactDetails.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    info: React.PropTypes.shape({
      address: React.PropTypes.string.isRequired
    })
  })).isRequired,
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired
  }).isRequired
}


function mapStateToProps ({ contacts: { contacts } }) {
  return { contacts }
}

const actions = { fetchContactInfo }

export default connect(mapStateToProps, actions)(ContactDetails)


export function findContact (props) {
  const { contacts, params: { id } } = props
  const contact = contacts.find((c) => String(c.id) === id)

  return contact
}
