import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    name: 'mik'
  }

  static async getInitialProps({ store, isServer, pathname, query }) {
    store.subscribe(() => {
      this.setState({ name: store.getState().login.login })
    })
  }

  render() {
    return (
      <div>
        {this.state.name}
        
      </div>
    )
  }
}

export default connect()(Home)
