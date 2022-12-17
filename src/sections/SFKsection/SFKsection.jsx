import React from 'react'
import DancScript from '../../components/DancScript/DancScript'
import SFKcard from '../../components/SFKcard/SFKcard'
import './style.css'

export default function SFKsection() {
  return (
    <div className='SFK-div' id='Menu'>
        <DancScript text='Straight From Kitchen'id="dancScr"/>
        <h2 className='SFK-h2'>our menu</h2>
        <div className='SFK-inner-div'>
            <SFKcard src='assets/sfk1.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 222'/>
            <SFKcard src='assets/sfk2.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 590'/>
            <SFKcard src='assets/sfk3.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 130'/>
            <SFKcard src='assets/sfk4.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 135'/>
            <SFKcard src='assets/sfk5.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 148'/>
            <SFKcard src='assets/sfk6.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 200'/>
            <SFKcard src='assets/sfk5.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 148'/>
            <SFKcard src='assets/sfk4.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 135'/>
            <SFKcard src='assets/sfk2.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 590'/>
            <SFKcard src='assets/sfk1.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 222'/>
            <SFKcard src='assets/sfk6.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 200'/>
            <SFKcard src='assets/sfk3.png' p1='Lorem ipsum dolor sit amet' p2='Lorem ipsum dolor sit amet' p3='Rs 130'/>
        </div>
    </div>
  )
}
