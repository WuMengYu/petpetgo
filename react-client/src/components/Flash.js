import React from 'react'
import { connect } from 'react-redux'

const Flash = (props) => (
  <h1 style={props.open ? { display: 'block' } : { display: 'none' }}>
    FLASH: {props.msg}
  </h1>
)

const mapStateToProps = (state) => ({
  open: state.view.flashOpen,
  msg: state.view.flashMsg
})

export default connect(mapStateToProps)(Flash)
