import React, { Component } from 'react'
import '../css/header.css'
import BottomList from './BottomList'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      showåList: false
    }
  }
  render() {
    return(
      <div className="header">
        <div className="more-button"></div>
        <BottomList display={this.state.showList}/>
      </div>
    )
  }
}

export default Header
