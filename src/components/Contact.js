import React from 'react'
import { connect } from 'react-redux'
import { toggleFriend } from '../actions/contacts'
import { Link } from 'react-router'


class Contact extends React.Component {
  toggleFriend () {
    this.props.toggleFriend(this.props.id)
  }

  render () {
    var heart = this.props.friend ? '♥' : '♡'

    return (
      <li>
        <span className="is-friend" onClick={ () => this.toggleFriend() }>{ heart }</span>
        <Link to={ '/contacts/' + this.props.id } activeClassName="active">{ this.props.name }</Link>
      </li>
    )
  }
}

Contact.propTypes = {
  toggleFriend: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  friend: React.PropTypes.bool.isRequired
}


var actions = { toggleFriend }

export default connect(null, actions)(Contact)
