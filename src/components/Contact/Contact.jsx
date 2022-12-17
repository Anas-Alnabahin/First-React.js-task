import React from 'react'
import './style.css'

export default function Contact(props) {
  return (
    <div className='cont-div' id={props.divid}>
        <img src={props.src} id={props.id2}/>
        <p className='contact-p' id={props.id}>{props.text}</p>
    </div>
  )
}
