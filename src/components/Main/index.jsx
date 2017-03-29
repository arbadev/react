import React from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

const messages = [
  {
    id: uuid.v4(),
    text: 'Tengo mucho dinero',
    picture: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/Comics-Ironman-Red-icon.png',
    displayName: 'Iron Man',
    userName: 'Tony Stark',
    date: Date.now(),
  },
  {
    id: uuid.v4(),
    text: 'Soy dracula 2.0',
    picture: 'https://a.wattpad.com/useravatar/xxbatmanbabyxx.128.904685.jpg',
    displayName: 'Batman',
    userName: 'Bruce Wayne',
    date: Date.now() - 240000,
  },
]
let openText = false

const Main = (props) => {
  const handleOpenText = (event) => {
    event.preventDefault()
    openText = true
  }

  const renderOpenText = () => {
    if (openText) return <InputText />
  }
  return (
    <div>
      <ProfileBar
        picture={props.user.photoUrl}
        username={props.user.email.split('@')[0]}
        onOpenText={handleOpenText}
      />
      {renderOpenText()}
      <MessageList messages={messages} />
    </div>
  )
}

Main.propTypes = {
  messages: React.PropTypes.array,
}

export default Main
