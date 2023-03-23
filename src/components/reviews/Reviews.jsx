import React from 'react';
import './reviews.css'
import Review from '../review/Review'
import profile1 from '../../assets/images/profile-1.jpg'
import profile2 from '../../assets/images/profile-2.jpg'
import profile3 from '../../assets/images/profile-1.jpg'
function Reviews() {
    return (
        <div className='container'>
            <div className='testimonials'>
                <Review
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img={profile1}
                    auth='Satish Patel'
                    job='Founder & CEO, Huddle'
                />
                <Review
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img={profile2}
                    auth='Bruce Mckenzie'
                    job='Founder & CEO, Huddle'
                />
                <Review
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img={profile3}
                    auth='Iva Boyed'
                    job='Founder & CEO, Huddle'
                />
            </div>
        </div>
    )
}

export default Reviews;