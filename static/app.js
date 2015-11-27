function Contact (props) {
  return React.createElement('li', {},
    React.createElement('a', {href: '#'}, props.name))
}

function ContactList () {
  return React.createElement('ul', {className: 'contacts'},
    React.createElement(Contact, {name: 'Lilian'}),
    React.createElement(Contact, {name: 'Thomas'}),
    React.createElement(Contact, {name: 'Bruno'}),
    React.createElement(Contact, {name: 'Nicolas'}))
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
