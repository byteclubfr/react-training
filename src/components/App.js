import React from 'react' // required for JSX
import Header from './Header'
import ContactList from './ContactList'


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    )
  }
}
