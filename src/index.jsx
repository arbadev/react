import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import App from './components/App'
import allReducers from './reducers'

// console.log(allReducers)
const store = createStore(allReducers)
render(<App />, document.getElementById('root'))
