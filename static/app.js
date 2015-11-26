function App () {
  return React.createElement('header', {className: ''},
    React.createElement('span', {}, 'Hello, '),
    React.createElement('strong', {}, 'World'))
}

var root = React.createElement(App)
ReactDOM.render(root, document.getElementById('app'))
