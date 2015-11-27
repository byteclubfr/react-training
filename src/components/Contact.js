import React from 'react'
import dispatcher from '../dispatcher'


export default class Contact extends React.Component {
  toggleFriend () {
    dispatcher.emit('TOGGLE_FRIEND', this.props.id)
  }

  render () {
    var heart = this.props.friend ? '♥' : '♡'

    return (
      <li>
        <span className="is-friend" onClick={ () => this.toggleFriend() }>{ heart }</span>
        <a href="#">{ this.props.name }</a>
      </li>
    )
  }
}

Contact.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  friend: React.PropTypes.bool.isRequired
}
