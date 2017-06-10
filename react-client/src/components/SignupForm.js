import '../css/signup-login-form.css'
import React, { Component } from 'react'
import axios from 'axios'
import {
  withRouter
} from 'react-router-dom'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.signUp = this.signUp.bind(this)
  }

  signUp(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    console.log(data)
    axios.post('http://petapi.haoduoshipin.com/user/signup', data).then(res => {
      this.props.hideForm()
      this.props.history.push('/mine')
    }).catch(err => {
      console.log(err.response) // show json data from sever
    })
  }

  render() {
    return(
      <div className="signup-form"
        style={this.props.display ? { display: 'block' } : { display: 'none' }}
      >
        <div className="form-container">
          <form onSubmit={this.signUp}>
            <input ref={input => this.userName = input} type="text" placeholder="用户名" />
            <input ref={input => this.passWord = input} type="password" placeholder="密码" />
            <input type="password" placeholder="再次输入" />
            <input className="submit" value="注册" type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm)
