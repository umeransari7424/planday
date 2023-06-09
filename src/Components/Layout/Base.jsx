import React from 'react'
// import Sidebar from './Sidebar'
import Header from './Header'

function Base(props) {
  return (
    <div>
        <div>
        <Header/>
        {props.children}
    </div>
    </div>
  )
}

export default Base