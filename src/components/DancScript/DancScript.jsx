import React from 'react'
import './style.css'

export default function DancScript(props) {
  return (
    <h3 className='dancScr' id={props.id}>{props.text}</h3>
  )
}
