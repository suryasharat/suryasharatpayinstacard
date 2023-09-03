import React from 'react'
import './index.css'

const Discount = () => {
  return (
    <div className='discount'>
      <div className='discount-cont'>
        <div className='logo-cont'>
                    <svg className='dis-logo-1' xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z" fill="#BE554B"/>
            </svg>
            <svg className='dis-logo-2' xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z" fill="#F8E27E" fill-opacity="0.25"/>
            </svg>
        </div>
        <div className='dis-heading'>
            <div className='dis-header'>
                <p className='dis-para'>Get 20% off for student</p>
                <h3 className='dis-head'>Student discounts available.<br/> <span className='dis-span'>Get ready for some fun in the sun!</span></h3>
                <ul className='dis-list-cont'>
                    <li className='dis-list'>Lorem ipsum dolor sit amet</li>
                    <li className='dis-list'>Massa quis natoque sit quam</li>
                    <li className='dis-list'>Eros non pellentesque elit</li>
                    <li className='dis-list'>tortor id euismod habitant</li>
                    <li className='dis-list'>Sed suspendisse id in ultrices</li>
                </ul>
            </div>
            <button className='dis-btn' type='button'>Explore More</button>
        </div>
        <svg className='dis-black' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.92452e-06 16C3.29189e-06 13.8988 0.413856 11.8183 1.21793 9.87706C2.02201 7.93585 3.20056 6.17202 4.6863 4.68629C6.17203 3.20055 7.93586 2.022 9.87707 1.21792C11.8183 0.413849 13.8989 -3.25675e-06 16 -2.79753e-06L16 16L2.92452e-06 16Z" fill="#505C59"/>
        </svg>

      </div>
      <img className='disImage' src='https://res.cloudinary.com/dkfnuewqm/image/upload/v1693664474/Mask_group_lzxbav.png' alt="disImage"/>
    </div>
  )
}

export default Discount
