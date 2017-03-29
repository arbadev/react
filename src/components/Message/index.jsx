import React from 'react'
import moment from 'moment'

import styles from './message.css'


const Message = (props) => {
  let dateFormat = moment(props.date).fromNow()
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <figure>
          <img className={styles.avatar} src={props.picture}></img>
        </figure>
        <span className={styles.displayName} >{props.displayName}</span>
        <span className={styles.userName} >{props.userName}</span>
        <span className={styles.date} >{dateFormat}</span>
      </div>
      <h3>{props.text}</h3>
      <div className={styles.buttons}>
        <div className={styles.icon}><span className='fa fa-reply'></span></div>
        <div className={styles.icon}><span className='fa fa-retweet'></span></div>
        <div className={styles.icon}><span className='fa fa-star'></span></div>
      </div>
    </div>
  )
}

Message.propTypes = {
  // messages: React.PropTypes.array
}

export default Message
