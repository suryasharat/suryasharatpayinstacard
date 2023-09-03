import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className='home-cont'>
      <div className='home-header-cont'>
      <svg className='home-spl' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z" fill="#BE554B"/>
      </svg>
        <p className='home-para-1'>Discover the beauty of tropics</p>
        <h1 className='home-heading'>Tropical Destinations For Student</h1>
        <p className='home-para-2'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
        <button className='sign-up-button' type='button'>Sign Up</button>
        <svg className='yellow' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path d="M21 7.34351e-06C21 2.75777 20.4568 5.48852 19.4015 8.03636C18.3461 10.5842 16.7993 12.8992 14.8492 14.8492C12.8992 16.7993 10.5842 18.3461 8.03635 19.4015C5.48851 20.4568 2.75776 21 0 21L3.67176e-06 3.67176e-06L21 7.34351e-06Z" fill="#F8E27E"/>
        </svg>
      </div>
      
      
      <img className='home-image' src="https://res.cloudinary.com/dkfnuewqm/image/upload/v1693648121/Group_171_ie1ckn.png" alt='homeImage'/>
      
     
    </div>
  )
}

export default Home
