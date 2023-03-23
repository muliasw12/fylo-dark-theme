import React from 'react'
import './stayProductive.css'
import stay from '../../assets/images/illustration-stay-productive.png'
import iconArrow from '../../assets/images/icon-arrow.svg'

function StayProductive() {
    return (
        <div className='container'>
            <div className='stayProductive'>
                <div className='stay-l'>
                    <img src={stay} alt='illustration-stay-productive'/>
                </div>
                <div className='stay-r'>
                <h1>Stay productive, wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo you covered for all of your life storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <a href='#fylo'>See how Fylo works <img src={iconArrow} alt='icon-arrow'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default StayProductive;