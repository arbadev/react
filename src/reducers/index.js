import { combineReducers } from 'redux'
import UserReducers from './UserReducers'
import MessageReducer from './MessageReducer'

// console.log('users': UserReducers)

export default combineReducers({
  user: UserReducers,
  messages: MessageReducer,
})
