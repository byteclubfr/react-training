import React from 'react' // required for JSX


export default function Header () {
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
