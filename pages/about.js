import React, { Component } from 'react'

class About extends Component {
  static async getInitialProps({ query }) {
    console.log('about',query)
  }

  render() {
    return (
      <div>
        hahaa
      </div>

    );
  }
}

export default About
