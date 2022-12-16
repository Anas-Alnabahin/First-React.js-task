import React from 'react'
import Button from '../Button/Button'
import './style.css'

export default function Nav() {
  return (
    <div className='nav'>
        <img src="assets/logo1.png" id='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Special</li>
            <li>Menu</li>
            <li>Blogs</li>
        </ul>
        <img src='assets/vector1.png' id='search'/>
        <Button name='Book Now' className='book-now'/>
    </div>
  )
}
