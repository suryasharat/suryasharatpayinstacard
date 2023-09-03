import React from 'react'
import './index.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h3 className='test-head'>Testimonials</h3>
      <div className='test-cont'>
        <div className='test-card'>
            <img className='test-image' src='https://res.cloudinary.com/dkfnuewqm/image/upload/v1693719149/Ellipse_1_v8tuxv.png' alt='testimonials'/>
            <p className='test-para-1'>Corey Korsgaard</p>
            <hr className='test-line'/>
            <p className='test-para-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='test-card'>
            <img className='test-image' src='https://res.cloudinary.com/dkfnuewqm/image/upload/v1693719644/Ellipse_1_1_eaybpz.png' alt='testimonials'/>
            <p className='test-para-1'>Jakob Aminoff</p>
            <hr className='test-line'/>
            <p className='test-para-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='test-card'>
            <img className='test-image' src='https://res.cloudinary.com/dkfnuewqm/image/upload/v1693719700/Ellipse_1_2_nha44l.png' alt='testimonials'/>
            <p className='test-para-1'>Carla Press</p>
            <hr className='test-line'/>
            <p className='test-para-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
