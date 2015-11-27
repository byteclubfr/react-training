import React from 'react' // required for JSX
import Contact from './Contact'
import { subscribe, getState } from '../store'


export default class ContactList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {contacts: getState().contacts}
  }
  componentWillMount () {
    this.unsubscribeStore = subscribe((state) => this.setState({contacts: state.contacts}))
  }
  componentWillUnmount () {
    this.unsubscribeStore()
  }


  renderContact (contact) {
    return <Contact key={ contact.name } name={ contact.name } initialIsFriend={ !!contact.friend } />
  }

  render () {
    var contacts = this.state.contacts.map((contact) => this.renderContact(contact))

    return (
      <ul className="contacts">
        { contacts }
      </ul>
    )
  }
}
