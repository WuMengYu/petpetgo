import '../css/bottom-list.css'
import React from 'react'

const BottomList = (props) => (
  <div style={props.display ? { display: 'block' } : { display: 'none' }}className="bottom-list">
    BottomList
  </div>
)

export default BottomList
