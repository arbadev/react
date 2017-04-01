import React from 'react'
import { bindActionsCreators } from 'redux'
import { connect } from 'react-redux'
import 'normalize-css'

import Header from '../../components/Header'
import Main from '../Main'

const App = (props) => {
  return (
    <div>
      <Header />
      <Main user={props.user} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

App.propTypes = {
  user: React.PropTypes.object,
}

export default connect(mapStateToProps)(App)
