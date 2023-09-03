import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-cont'>
        <h3 className='foot-head'>Student Special: Discounted rates on tropical getaways!</h3>
        <p className='foot-para'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
      </div>
      <div className='foot-card'>
        <ul className='foot-list-cont-1'>
            <li className='foot-list-1'>Privacy Policy</li>
            <li className='foot-list-1'>Terms of Use</li>
            <li className='foot-list-1'>Sales and Refunds</li>
            <li className='foot-list-1'>Legal</li>
        </ul>
        <ul className='foot-list-cont-2'>
            <li className='foot-list-2'>About</li>
            <li className='foot-list-2'>Schedules</li>
            <li className='foot-list-2'>Pricing</li>
            <li className='foot-list-2'>Membership</li>
            <li className='foot-list-2'>Joins</li>
            <li><svg className='special' xmlns="http://www.w3.org/2000/svg" width="2" height="19" viewBox="0 0 2 19" fill="none">
  <path d="M1 0V19" stroke="#2D2E2E"/>
</svg></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
