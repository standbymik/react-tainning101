import React, { Component } from 'react'

class Notfound extends Component {
  render() {
    console.log('notfound')

    return (
      <React.Fragment>
        <div style={{ textAlign: 'center', height: '500px', paddingTop: '10%' }}>
          Not Found
        </div>
      </React.Fragment>

    );
  }
}

export default Notfound
