import React from 'react'
import DancScript from '../../components/DancScript/DancScript'
import SpecialCard from '../../components/SpecialCard/SpecialCard'
import './style.css'

export default function SpecialSec() {
  return (
    <div className='special-sec'>
            <DancScript text='Special'/>
            <h3 className='special-sec-h3'>What makes us special</h3>
            <div className='spec-sec-div'>
                <SpecialCard imgSrc='assets/juice.png' name='Fresh food' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
                <SpecialCard imgSrc='assets/chef.png' name='skilled Chef' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
                <SpecialCard imgSrc='assets/restaurant.png' name='Exotic dishes' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
            </div>
    </div>
  )
}
