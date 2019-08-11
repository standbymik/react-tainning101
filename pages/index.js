import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    name: ''
  }

  static async getInitialProps({ store, isServer, pathname, query }) {
    
  }

  changeName = (e)=>{
    let value = e.target.value
    this.setState(()=>{
      return{
        name:value
      }
    })
  }

  dispatchName=()=>{
    this.props.changeLogin(this.state.name)
  }

  render() {
    return (
      <div>
        <div>ค่าจาก Store : {this.props.login.login}</div>
        <div>
          <input type="text" value={this.state.name} onChange={(e)=>{this.changeName(e)}} />
          <button onClick={this.dispatchName}>Dispatch Redux</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeLogin:(name)=>{
      dispatch({type:'SUCCESS',login:name})
    }
  }
}

export default connect(state=>state,mapDispatchToProps)(Home)
