import React from 'react'
import 'normalize-css'

import Header from '../Header'
import Main from '../Main'
// import styles from './app.css'

// const App = (props, context) => {
//   // const {
//   //   location
//   // } = context.router;

const App = () => {
  const user = {
    photoUrl: 'https://lh5.googleusercontent.com/-s9_Tt3cFDr0/AAAAAAAAAAI/AAAAAAAAABU/pokobD-s618/photo.jpg',
    email: 'a3barradas@gmail.com',
    onOpenText: false,
  }
  return (
    <div>
      <Header />
      <Main user={user} />
    </div>
  )
}

export default App
