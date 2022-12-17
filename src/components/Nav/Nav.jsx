import React from 'react'
import Button from '../Button/Button'
import './style.css'

export default function Nav(props) {
  return (
    <div className='nav'>
        <img src="assets/logo1.png" id='logo'/>
        <ul>
            <li><a href='#Home'>Home</a></li> 
            <li><a href='#About-Us'>About Us</a></li>
            <li><a href='#Special'>Special</a></li>
            <li><a href='#Menu'>Menu</a></li>
            <li><a href='#Blogs'>Blogs</a></li>
        </ul>
        <img src='assets/vector1.png' id='search'/>
        <Button name='Book Now' className='book-now'/>
    </div>
  )
}
