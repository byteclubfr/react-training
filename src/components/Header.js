import React from 'react' // required for JSX
import { IndexLink, Link } from 'react-router'


export default function Header () {
  return (
    <header>
      <h1>Contact List</h1>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/contacts" activeClassName="active">Contacts</Link>
      </nav>
    </header>
  )
}
