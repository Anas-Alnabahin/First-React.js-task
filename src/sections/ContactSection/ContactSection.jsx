import React from 'react'
import Contact from '../../components/Contact/Contact'
import './style.css'

export default function ContactSection() {
  return (
    <div className='contact-div'>
        <div className="con-div-1">
            <div>
                <img src="assets/logo1.png"/> <p>Golden View Dine</p>
            </div>
            <p className='div1-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
            <div className='icons-div'>
                <div className='img-container'><img src="assets/insta.png"   className='icons'/></div>
                <div className='img-container'><img src="assets/twit.png"    className='icons'/></div>
                <div className='img-container'><img src="assets/youtube.png" className='icons'/></div>
            </div>
        </div>
        <div className="con-div-2">
            <h2>Other Links</h2>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & conditions</li>
                <li>Blogs</li>
                <li>our team</li>
                <li>Our kitchen</li>
            </ul>
        </div>
        <div className="con-div-3">
            <h2>Contact Us</h2>
            <Contact src='assets/mail.png' text='Gogreendineservice@gmail.com'/>
            <Contact src='assets/gps.png' text='AZ complex bylane3 Mandari Rd Mumbai 1100867 'id2='sec-cont-img'/>
            <Contact src='assets/phone.png' text='+1800 287 256'id='last-cont' id2='last-cont-img'/>
        </div>
    </div>
  )
}
