import React from 'react' // required for JSX
import Header from './Header'
import ContactList from './ContactList'
import NewContactForm from './NewContactForm'


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <ContactList />
        <NewContactForm />
      </div>
    )
  }
}
