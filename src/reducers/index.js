import { combineReducers } from 'redux'
import UserReducers from './UserReducers'

// console.log('users': UserReducers)

export default combineReducers({
  users: UserReducers,
})
