import '../css/bottom-list.css'
import React, { Component } from 'react'
import SignupForm from './SignupForm'

class BottomList extends Component {
  constructor() {
    super()
    this.state = {
      showSignUp: false,
      showLogin: false
    }
    this.showLogin = this.showLogin.bind(this)
    this.openSignup = this.openSignup.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  openSignup() {
    this.setState({
      showSignUp: true
    })
  }

  showLogin() {
    console.log('showLogin')
  }

  cancel() {
    this.props.closeBottomList();
    this.setState({
      showSignUp: false
    })
  }

  render() {
    return(
      <div
      style={this.props.display ? { display: 'block' } : { display: 'none' }} className="bottom-list">
        <SignupForm display={this.state.showSignUp} hideForm={this.cancel} />
        <div className="login-actions">
          <ul>
            <li onClick={this.openSignup}>注册</li>
            <li onClick={this.showLogin}>登录</li>
            <li onClick={this.cancel}>取消</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BottomList
