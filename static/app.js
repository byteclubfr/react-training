var Contact = React.createClass({
  getInitialState () {
    return {isFriend: this.props.initialIsFriend}
  },
  toggleFriend () {
    this.setState({isFriend: !this.state.isFriend})
  },
  render () {
    var heart = this.state.isFriend ? '♥' : '♡'
    var self = this

    return React.createElement('li', {},
      React.createElement('span', {className: 'is-friend', onClick: function () { self.toggleFriend() }}, heart),
      React.createElement('a', {href: '#'}, this.props.name))
  }
})

function ContactList () {
  return React.createElement('ul', {className: 'contacts'},
    React.createElement(Contact, {name: 'John', initialIsFriend: false}),
    React.createElement(Contact, {name: 'Lilian', initialIsFriend: true}),
    React.createElement(Contact, {name: 'Thomas', initialIsFriend: true}),
    React.createElement(Contact, {name: 'Bruno', initialIsFriend: true}),
    React.createElement(Contact, {name: 'Nicolas', initialIsFriend: true}))
}

function Header () {
  return React.createElement('header', {},
    React.createElement('h1', {}, 'Contact List'),
    React.createElement('nav', {},
      React.createElement('a', {href: '#'}, 'Home'),
      React.createElement('a', {href: '#', className: 'active'}, 'Contacts')))
}

function App () {
  return React.createElement('div', {},
    React.createElement(Header),
    React.createElement(ContactList))
}

var root = React.createElement(App)
ReactDOM.render(root, document.getElementById('app'))
