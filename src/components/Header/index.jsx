import React from 'react'

import styles from './header.css'

const Header = (props, context) => {
  // const {
  //   location
  // } = context.router;

  return (
    <div>
      <header className={styles.root}>
        <h1 className={styles.logo}> Reactrr </h1>
      </header>
    </div>
  )
}

export default Header
