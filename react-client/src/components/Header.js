import React, { Component } from 'react'
import '../css/header.css'
import BottomList from './BottomList'


import { connect } from 'react-redux'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      showList: false
    }
    this.openBottomList = this.openBottomList.bind(this)
    this.closeBottomList = this.closeBottomList.bind(this)
  }
  componentWillMount(){
    console.log('componentWillMount--data', this.props.data)
  }
  openBottomList() {
    this.setState({
      showBottomList: true
    })
  }

  closeBottomList() {
    this.setState({
      showBottomList: false
    })
  }

  render() {
    return(
      <div className="header">
        <div onClick={this.openBottomList} className="more-button"></div>
        <BottomList closeBottomList={this.closeBottomList} display={this.state.showBottomList}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  data: state
})

export default connect(mapStateToProps)(Header)
