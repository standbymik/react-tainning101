import React, { Component } from 'react'

class About extends Component {
  static async getInitialProps({ query }) {
    console.log(query)
  }

  render() {
    return (
      <div style={{fontSize:60,color:'#ff00ff'}}>
        hahaa
      </div>

    );
  }
}

export default About
