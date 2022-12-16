import React from 'react'
import './style.css'
import Button from '../Button/Button'
import DancScript from '../DancScript/DancScript'

export default function RsecComp(props) {
  return (
    <div className='rsec-div'>
        <DancScript text={props.text} id={props.id}/>
        <p className='rsec-p-1' id={props.p1id}>{props.p1}</p>
        <p className='rsec-p-2' id={props.p2id}>{props.p2}</p>
        <Button name = {props.name} className = {props.btnclass}/>
    </div>
  )
}
