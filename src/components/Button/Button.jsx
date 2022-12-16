import React from 'react'
import './style.css'

export default function Button(props) {
  return (
        <button className={props.className}>{props.name}</button>
  )
}
