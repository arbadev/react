import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { displayTweetInput } from '../../actions'

import MessageList from '../../components/MessageList'
import ProfileBar from '../../components/ProfileBar'
import InputText from '../../components/InputText'

// class Main extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       messages: [
//         {
//           id: uuid.v4(),
//           text: 'Tengo mucho dinero',
//           picture: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/Comics-Ironman-Red-icon.png',
//           displayName: 'Iron Man',
//           username: 'Tony Stark',
//           date: Date.now(),
//         },
//         {
//           id: uuid.v4(),
//           text: 'Soy dracula 2.0',
//           picture: 'https://a.wattpad.com/useravatar/xxbatmanbabyxx.128.904685.jpg',
//           displayName: 'Batman',
//           username: 'Bruce Wayne',
//           date: Date.now() - 240000,
//         },
//         {
//           id: uuid.v4(),
//           text: 'Yo HULK yo GENTE!!',
//           picture: 'http://files.gamebanana.com/img/ico/sprays/hulk_9.png',
//           displayName: 'Hulk',
//           username: 'Robert Bruce Banner',
//           date: Date.now() - 360000,
//         },
//       ],
//       openText: false,
//     }
//     this.renderOpenText = this.renderOpenText.bind(this)
//     this.handleOpenText = this.handleOpenText.bind(this)
//   }
//
//   handleOpenText(event) {
//     event.preventDefault()
//     this.setState({ openText: true })
//   }
//   renderOpenText() {
//     if (this.state.openText) {
//       return <InputText />
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <ProfileBar
//           picture={this.props.user.photoUrl}
//           username={this.props.user.email.split('@')[0]}
//           onOpenText={this.handleOpenText}
//         />
//         {this.renderOpenText()}
//         <MessageList messages={this.state.messages} />
//       </div>
//     )
//   }
// }

const handleOpenText = (event) => {
  event.preventDefault()
  this.setState({ openText: true })
}

const renderOpenText = (props) => {
  if (props.openTex) {
    return <InputText />
  }
}

const Main = (props) => {
  console.log('props', props)
  return (
    <div>
      <ProfileBar
        picture={props.user.photoUrl}
        username={props.user.email.split('@')[0]}
        onOpenText={handleOpenText}
      />
      {renderOpenText(props)}
      <MessageList messages={props.messages} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ displayTweetInput }, dispatch)
}

Main.propTypes = {
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  openTex: React.PropTypes.bool,
}

export default connect(mapStateToProps, matchDispatchToProps)(Main)
