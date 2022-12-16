import React from 'react'
import BTsection from '../Booktablesection/BTsection'
import DRMsection from '../DRMsection/DRMsection'
import Rsection from '../Rsection/Rsection'
import Rsection2 from '../Rsection2/Rsection2'
import SFKsection from '../SFKsection/SFKsection'
import SpecialSec from '../SpecialSection/SpecialSec'
import './style.css'

export default function Main() {
  return (
    <div className='main'>
        <Rsection/>
        <SpecialSec/>
        <SFKsection/>
        <BTsection/>
        <Rsection2/>
        <DRMsection/>
    </div>
  )
}
