import React, { Component } from 'react'
import { bindActionsCreators } from 'redux'
import { connect } from 'react-redux'
import 'normalize-css'

import Header from '../../components/Header'
import Main from '../Main'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main user={this.props.user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(App)
