import '../css/bottom-list.css'
import React, { Component } from 'react'

class BottomList extends Component {
  constructor() {
    super()
    this.state = {
      showSignUp: false,
      showLogin: false
    }
    this.showLogin = this.showLogin.bind(this)
    this.showSignUp = this.showSignUp.bind(this)
  }

  showSignUp() {
    console.log('showSignUp')
  }

  showLogin() {
    console.log('showLogin')
  }

  render() {
    return(
      <div onClick={this.props.toggleOpen}
      style={this.props.display ? { display: 'block' } : { display: 'none' }}className="bottom-list">

        <div className="login-actions">
          <ul>
            <li onClick={this.showSignUp}>注册</li>
            <li onClick={this.showLogin}>登录</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BottomList
