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

const mapStateToProps = (state) => {
  return { login: state.login }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch({ type: 'SUCCESS', login: 'Standbymik' })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
