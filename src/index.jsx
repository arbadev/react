import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import allReducers from './reducers'

const store = createStore(allReducers)
// console.log(allReducers)
// console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
