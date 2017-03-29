import React from 'react'
import styles from './profileBar.css'

const ProfileBar = (props) => {
  return (
    <div className={styles.root}>
      <figure>
        <img className={styles.avatar} src={props.picture} />
      </figure>
      <span className={styles.username}>Hi @{props.username}!</span>
      <button onClick={props.onOpenText} className={styles.button}>
        <span className="fa fa-lg fa-edit"> </span> Tweet!
      </button>
    </div>
  )
}

ProfileBar.propTypes = {
  // messages: React.PropTypes.array
}

export default ProfileBar
