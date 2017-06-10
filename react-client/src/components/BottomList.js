import '../css/bottom-list.css'
import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { closeBottomList } from '../redux/actions/bottomListActions'
import { openSignupForm } from '../redux/actions/signupFormActions'

class BottomList extends Component {
  constructor() {
    super()
    this.cancel = this.cancel.bind(this)
    this.signup = this.signup.bind(this)
  }

  cancel() {
    this.props.closeBottomList()
  }

  signup() {
    this.props.openSignupForm()
    this.props.closeBottomList()
  }

  render() {
    return(
      <div
      style={this.props.open ? { display: 'block' } : { display: 'none' }} className="bottom-list">
        <div className="login-actions">
          <ul>
            <li onClick={this.signup}>注册</li>
            <li onClick={this.showLogin}>登录</li>
            <li onClick={this.cancel}>取消</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.bottomList.open
})
export default connect(mapStateToProps, { closeBottomList, openSignupForm })(BottomList)
