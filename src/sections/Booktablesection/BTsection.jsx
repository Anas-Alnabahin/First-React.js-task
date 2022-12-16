import React from 'react'
import Button from '../../components/Button/Button'
import DancScript from '../../components/DancScript/DancScript'
import './style.css'

export default function BTsection() {
  return (
    <div className='BTsec-div'>
        <div className='BTsec-inner-div'>
            <div>
                <img src="assets/ribbon2.png" className='rib2'/>
                <img src="assets/ribbon.png" className='rib1'/>
            </div>
            <div className='mid-div'>
                <DancScript text='Come join us for a lunch this weekend and enjoy' id='BT-dancScr'/>
                <h2>FLAT 10% OFF</h2>
                <Button name="Book Table" className='BT-btn'/>
            </div>
            <div>
                <img src="assets/ribbon2.png" className='rib4'/>
                <img src="assets/ribbon.png" className='rib3'/>
            </div>
        </div>
    </div>
  )
}
