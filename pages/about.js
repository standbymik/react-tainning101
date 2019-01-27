import React, { Component } from 'react'

class About extends Component {
  static async getInitialProps({ query }) {
    console.log(query)
  }

  render() {
    console.log('about')
    return (
      <div>
        hahaa
      </div>

    );
  }
}

export default About
