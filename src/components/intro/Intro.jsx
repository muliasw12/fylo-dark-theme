import React from 'react'
import './intro.css';
import Illustration from '../../assets/images/illustration-intro.png';
import Button from '../button/Button';

const Intro = () => {
  return (
    <div className="container">
        <div className="introContainer">
            <img src={Illustration} alt='illustration-intro'/>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all you most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <Button text='Get Started' /*classSize='email-btn'*/ />
        </div>
    </div>
  )
}

export default Intro
