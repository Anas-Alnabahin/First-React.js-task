import React from 'react'
import './style.css'

export default function ReviewCard(props) {
  return (
    <div className='rev-card'>
        <div className='first-div'>
            <img src={props.src}/>
            <div className='p1-stars-div'>
                <p>{props.p1}</p>
                <img src={props.star}/>
                <img src={props.star}/>
                <img src={props.star}/>
                <img src={props.star}/>
                <img src={props.star}/>
            </div>
        </div>
        <p className='p2'>{props.p2}</p>
    </div>
  )
}
