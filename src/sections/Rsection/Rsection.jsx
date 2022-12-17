import React from 'react'
import Container from '../../components/Container/Container'
import Nav from '../../components/Nav/Nav'
import RsecComp from '../../components/RsecComp/RsecComp'
import './style.css'

export default function Rsection() {
  return (
    <Container id='About-Us'>
        <RsecComp text='About Us' p1='Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine'
                  p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.'  
                  name='Read more' btnclass='rsec-btn'/>
        <img src='assets/plate1.png' id='rsec-img'/>
    </Container>
  )
}
