import React from 'react'
import Button from '../../components/Button/Button'
import Contact from '../../components/Contact/Contact'
import './style.css'

export default function SubscribeSection() {
  return (
    <div className='sub-div'>
        <Contact src='assets/mail2.png' text='Subscribe to our Newsletter' id='id' id2='id2' divid="parent"/>
        <input type="text" className='sub-input' placeholder='Your Email id'/>
        <Button name='Subscribe'/>
    </div>
  )
}
