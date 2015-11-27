class Contact extends React.Component {
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

function ContactList () {
  return (
    <ul className="contacts">
      <Contact name="John" />
      <Contact name="Lilian" initialIsFriend={ true } />
      <Contact name="Thomas" initialIsFriend={ true } />
      <Contact name="Bruno" initialIsFriend={ true } />
      <Contact name="Nicolas" initialIsFriend={ true } />
    </ul>
  )
}

function Header () {
  return (
    <header>
      <h1>Contact List</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#" className="active">Contacts</a>
      </nav>
    </header>
  )
}

function App () {
  return (
    <div>
      <Header />
      <ContactList />
    </div>
  )
}

var root = <App />
ReactDOM.render(root, document.getElementById('app'))
