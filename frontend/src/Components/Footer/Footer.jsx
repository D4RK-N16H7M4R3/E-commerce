import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import Insta_icon from '../Assets/instagram_icon.png'
import Pintrest_icon from '../Assets/pintester_icon.png'
import Whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={Insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={Pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={Whatsapp_icon} alt="" />
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
