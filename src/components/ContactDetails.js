import React from 'react' // required for JSX
import { connect } from 'react-redux'


class ContactDetails extends React.Component {
  render () {
    return (
      <div className="contact-details">
        <h2>Contact's name</h2>
        <p>Is my friend? Yes/No</p>
        <p>Address (yet another ajax call)</p>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    contacts: state.contacts.contacts,
    loading: state.ui.loadingContacts
  }
}

export default connect(mapStateToProps)(ContactDetails)
