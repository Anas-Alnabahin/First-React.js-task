import React from 'react'
import './style.css'

export default function BlogCard(props) {
  return (
    <div className='blog-card' id={props.cardid}>
        <img src={props.src}/>
        <div className="blog-div">
            <p className='p1'>{props.p1}</p>
            <p className='p2-class'>{props.p2}</p>
            <p className='p3'>Read more</p>
        </div>
    </div>
  )
}
