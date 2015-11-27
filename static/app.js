var h = React.createElement

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
      h('li', {},
        h('span', {className: 'is-friend', onClick: () => this.toggleFriend()}, heart),
        h('a', {href: '#'}, this.props.name)
      ) // li
    )
  }
}

Contact.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialIsFriend: React.PropTypes.bool
}

function ContactList () {
  return (
    h('ul', {className: 'contacts'},
      h(Contact, {name: 'John'}),
      h(Contact, {name: 'Lilian', initialIsFriend: true}),
      h(Contact, {name: 'Thomas', initialIsFriend: true}),
      h(Contact, {name: 'Bruno', initialIsFriend: true}),
      h(Contact, {name: 'Nicolas', initialIsFriend: true})
    ) // ul
  )
}

function Header () {
  return (
    h('header', {},
      h('h1', {}, 'Contact List'),
      h('nav', {},
        h('a', {href: '#'}, 'Home'),
        h('a', {href: '#', className: 'active'}, 'Contacts')
      ) // nav
    ) // header
  )
}

function App () {
  return (
    h('div', {},
      h(Header),
      h(ContactList)
    ) // div
  )
}

var root = h(App)
ReactDOM.render(root, document.getElementById('app'))
