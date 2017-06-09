import '../css/signup-login-form.css'
import React, { Component } from 'react'

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.signUp = this.signUp.bind(this)
  }

  signUp() {
    console.log('axios signning up')
  }

  render() {
    return(
      <div
        style={this.props.display ? { display: 'block' } : { display: 'none' }}
      >
        SignUpForm
      </div>
    )
  }
}

export default SignupForm
