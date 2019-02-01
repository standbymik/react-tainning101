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

<<<<<<< HEAD
  render() {

=======
  static async getInitialProps({ query }) {
    console.log('index')
  }

  render() {
>>>>>>> 9638acd78f35397b464788e74978967b4ef2119d

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
