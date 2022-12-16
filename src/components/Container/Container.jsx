import React from 'react'
import './style.css'

export default function Container(props) {
  return (
    <div className='container' id={props.id}>
        {props.children}
    </div>
  )
}
