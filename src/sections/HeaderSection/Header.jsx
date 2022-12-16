import React from 'react'
import Button from '../../components/Button/Button'
import Nav from '../../components/Nav/Nav'
import './style.css'

export default function Header() {
  return (
    <div className='header'>
        <Nav />
            <h1>Welcome To Golden View Dine </h1>
            <p className='header-p'>Explore the authentic vegan dishes with your friends and family</p>
        <Button name='Read more' className='read-more'/>
    </div>
  )
}
