import '../css/bottom-list.css'
import React from 'react'

const BottomList = (props) => (
  <div onClick={props.toggleOpen} 
  style={props.display ? { display: 'block' } : { display: 'none' }}className="bottom-list">
  </div>
)

export default BottomList
