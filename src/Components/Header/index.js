import React from 'react'
import './index.css'
const Header = () => {
  return (
    <nav>
      <div className='nav'>
        <ul className='nav-buttons'>
            <li className='list-item'>Home</li>
            <li className='list-item'>About</li>
            <li className='list-item'>Schedules</li>
            <li className='list-item'>Membership</li>
            <li className='list-item'>Pricing</li>
        </ul>
        <div className='offer-container'>
            <p className='offers'>Offers</p>
            <button className='course-button' type='button'>Courses</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
