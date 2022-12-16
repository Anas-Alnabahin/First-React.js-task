import React from 'react'
import './style.css'

export default function SFKcard(props) {
  return (
    <div className='SFKcard-div'>
        <img src={props.src}/>
        <div className='SFKcard-inner-div'>
            <p className='firstp'>{props.p1}</p>
            <p className='secondp'>{props.p2}</p>
        </div>
        <p className='thirdp'>{props.p3}</p>
    </div>
  )
}
