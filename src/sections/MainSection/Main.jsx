import React from 'react'
import BlogsSection from '../BlogsSection/BlogsSection'
import BTsection from '../Booktablesection/BTsection'
import ContactSection from '../ContactSection/ContactSection'
import DRMsection from '../DRMsection/DRMsection'
import FooterSection from '../FooterSection/FooterSection'
import ReviewsSection from '../ReviewsSection/ReviewsSection'
import Rsection from '../Rsection/Rsection'
import Rsection2 from '../Rsection2/Rsection2'
import SFKsection from '../SFKsection/SFKsection'
import SpecialSec from '../SpecialSection/SpecialSec'
import SubscribeSection from '../SubscribeSection/SubscribeSection'
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
        <ReviewsSection/>
        <BlogsSection/>
        <ContactSection/>
        <SubscribeSection/>
        <FooterSection/>
    </div>
  )
}
