import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
<<<<<<< HEAD

  static async getInitialProps({ store, isServer, pathname, query }) {

=======
  static async getInitialProps({ query }) {
    console.log('about',query)
>>>>>>> 9638acd78f35397b464788e74978967b4ef2119d
  }

  render() {

    console.log(this.props.login)

    return (
      <div style={{ fontSize: 60, color: '#ff00ff' }}>
        hahaa
      </div>

    );
  }
}

export default connect()(About)
