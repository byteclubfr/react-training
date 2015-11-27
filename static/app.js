function Contact (props) {
  return React.createElement('li', {},
    React.createElement('a', {href: '#'}, 'Contact name'))
}

function ContactList () {
  return React.createElement('ul', {className: 'contacts'},
    React.createElement(Contact),
    React.createElement(Contact),
    React.createElement(Contact),
    React.createElement(Contact))
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
