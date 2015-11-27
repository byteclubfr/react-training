import React from 'react'


export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isFriend: !!this.props.initialIsFriend}
  }
  toggleFriend () {
    this.setState({isFriend: !this.state.isFriend})
  }
  render () {
    var heart = this.state.isFriend ? '♥' : '♡'

    return (
      <li>
        <span className="is-friend" onClick={ () => this.toggleFriend() }>{ heart }</span>
        <a href="#">{ this.props.name }</a>
      </li>
    )
  }
}

Contact.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialIsFriend: React.PropTypes.bool
}
