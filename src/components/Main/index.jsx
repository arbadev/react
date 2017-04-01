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
    username: 'Tony Stark',
    date: Date.now(),
  },
  {
    id: uuid.v4(),
    text: 'Soy dracula 2.0',
    picture: 'https://a.wattpad.com/useravatar/xxbatmanbabyxx.128.904685.jpg',
    displayName: 'Batman',
    username: 'Bruce Wayne',
    date: Date.now() - 240000,
  },
  {
    id: uuid.v4(),
    text: 'Yo HULK yo GENTE!!',
    picture: 'http://files.gamebanana.com/img/ico/sprays/hulk_9.png',
    displayName: 'Hulk',
    username: 'Robert Bruce Banner',
    date: Date.now() - 360000,
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
  user: React.PropTypes.object,
}

export default Main
