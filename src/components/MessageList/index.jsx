import React from 'react'

import Message from '../Message'
import styles from './messageList.css'

const MessageList = (props) => {
  return (
    <div className={styles.root}>
      {props.messages.map(msg => {
        return (
          <Message
            key={msg.id}
            text={msg.text}
            picture={msg.picture}
            displayName={msg.displayName}
            userName={msg.userName}
            date={msg.date}
          />
        )
      })}
    </div>
  )
}

MessageList.propTypes = {
  messages: React.PropTypes.array
}

export default MessageList
