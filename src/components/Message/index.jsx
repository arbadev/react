import React from 'react'
import moment from 'moment'

import styles from './message.css'


const Message = (props) => {
  const dateFormat = moment(props.date).fromNow()
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <figure>
          <img alt="Avatar" className={styles.avatar} src={props.picture} />
        </figure>
        <span className={styles.displayName} >{props.displayName}</span>
        <span className={styles.userName} >{props.username}</span>
        <span className={styles.date} >{dateFormat}</span>
      </div>
      <h3>{props.text}</h3>
      <div className={styles.buttons}>
        <div className={styles.icon}><span className="fa fa-reply" /></div>
        <div className={styles.icon}><span className="fa fa-retweet" /></div>
        <div className={styles.icon}><span className="fa fa-star" /></div>
      </div>
    </div>
  )
}

Message.propTypes = {
  text: React.PropTypes.string,
  picture: React.PropTypes.string,
  displayName: React.PropTypes.string,
  date: React.PropTypes.number,
  username: React.PropTypes.string,
}

export default Message
