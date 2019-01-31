import React, { Component } from 'react'

class Home extends Component {

  static async getInitialProps({ query }) {
    console.log('index')
  }

  render() {

    return (
      <div>
        <div>
          StandbyMik
        </div>
      </div>
    )
  }
}

export default Home
