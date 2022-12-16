import React from 'react'
import './style.css'

export default function SpecialCard(props) {
  return (
    <div className='spec-card'>
        <img src={props.imgSrc} id='spec-img'/>
        <h3 className='spec-h3'>{props.name}</h3>
        <p className='spec-p'>{props.content}</p>
    </div>
  )
}
