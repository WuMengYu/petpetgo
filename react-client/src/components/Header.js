import React, { Component } from 'react'
import '../css/header.css'
import BottomList from './BottomList'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      showList: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  handleClick() {
    this.setState({
      showList: true
    })
  }

  toggleOpen() {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {
    return(
      <div className="header">
        <div onClick={this.handleClick} className="more-button"></div>
        <BottomList toggleOpen={this.toggleOpen} display={this.state.showList}/>
      </div>
    )
  }
}

export default Header
