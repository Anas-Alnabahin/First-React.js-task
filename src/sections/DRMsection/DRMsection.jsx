import React from 'react'
import DRMcard from '../../components/DRMcard/DRMcard'
import './style.css'

export default function DRMsection() {
  return (
    <div className='DRM-div'>
        <DRMcard src='assets/dish.png' h3='250+' p='Delicacy'/>
        <DRMcard src='assets/chef2.png' h3='10+' p='Renowed Chefs'/>
        <DRMcard src='assets/team.png' h3='30+' p='Members'/>
    </div>
  )
}
