import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {

  static async getInitialProps({ store, isServer, pathname, query }) {

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
