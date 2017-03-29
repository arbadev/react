import React from 'react'
import styles from './profileBar.css'

const ProfileBar = (props) => {
  return (
    <div className={styles.root}>
      <figure>
        <img alt="Avatar" className={styles.avatar} src={props.picture} />
      </figure>
      <span className={styles.username}>Hi @{props.username}!</span>
      <button onClick={props.onOpenText} className={styles.button}>
        <span className="fa fa-lg fa-edit" /> Tweet!
      </button>
    </div>
  )
}

ProfileBar.propTypes = {
  picture: React.PropTypes.string,
  username: React.PropTypes.string,
  onOpenText: React.PropTypes.func,
}

export default ProfileBar
