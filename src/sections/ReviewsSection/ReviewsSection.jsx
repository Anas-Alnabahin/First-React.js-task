import React from 'react'
import DancScript from '../../components/DancScript/DancScript'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import './style.css'

export default function ReviewsSection() {
  return (
    <div className='rev-sec-div'>
        <DancScript text='Reviews' id='rev-dancsrc'/>
        <h2>words from our food lovers</h2>
        <div className="cards-div">
            <ReviewCard src='assets/person1.png' p1='Alex andrina' star='assets/star.png' p2='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
            <ReviewCard src='assets/person1.png' p1='Alex andrina' star='assets/star.png' p2='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
            <ReviewCard src='assets/person2.png' p1='Alex andrina' star='assets/star.png' p2='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
        </div>
    </div>
  )
}
