import React from 'react'
import './style.css'
import Container from '../../components/Container/Container'
import RsecComp from '../../components/RsecComp/RsecComp'

export default function Rsection2() {
  return (
<Container id='Rsec2'>
        <RsecComp text='Cooking ingredients' id='rsec2-dancscr' p1='What goes in' p1id = 'p1'
                  p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit. '  
                  p2id='p2'
                  name='Read more' btnclass='btn'/>
        <img src='assets/Rsec2.png' id='img'/>
    </Container>
  )
}
