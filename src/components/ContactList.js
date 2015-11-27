import React from 'react' // required for JSX
import Contact from './Contact'


export default function ContactList () {
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

