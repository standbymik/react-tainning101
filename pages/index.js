import React, { Component } from 'react'

class Home extends Component {

  static async getInitialProps({ query }) {
    console.log('index')
  }

  render() {

    return (
      <React.Fragment>
        <div>
          <div>
            StandbyMikหกเหกเหกเหกเหกเหก
            หกเหกเหกเกหเ
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
