import React, { Component } from 'react'
import '../css/header.css'
import { openBottomList } from '../redux/actions/bottomListActions'

import { connect } from 'react-redux'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      showList: false
    }
    this.closeBottomList = this.closeBottomList.bind(this)
  }

  closeBottomList() {
    this.setState({
      showBottomList: false
    })
  }

  render() {
    return(
      <div className="header">
        <div onClick={this.props.openBottomList} className="more-button"></div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  data: state
})

export default connect(mapStateToProps, {openBottomList})(Header)
