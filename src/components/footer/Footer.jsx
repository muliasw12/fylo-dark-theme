import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.svg'
import location from '../../assets/images/icon-location.svg'
import phone from '../../assets/images/icon-phone.svg'
import email from '../../assets/images/icon-email.svg'
import { FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa'


function Footer() {
    return (
        <footer>
            <div className="left">
                <img id="logo" src={logo} alt="logo"/>

                <div className="left2">
                    <img id="pin" src={location} alt="location pin"/>
                    <p>Bogor, West Java, Indonesia</p>
                </div>
            </div>

            <div className="contact">
                <div>
                    <img src={phone} alt="phone"/>
                    <p>+1-543-123-4567</p>
                </div>
                <div>
                    <img src={email} alt="email"/>
                    <p>example@fylo.com</p>
                </div>
            </div>

            <ul className="info">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Jobs</li>
                <li>Terms</li>
                <li>Press</li>
                <li>Privacy</li>
                <li>Blog</li>
            </ul>

            <ul className="social">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
            </ul>
           
        </footer>
    );
}

export default Footer
