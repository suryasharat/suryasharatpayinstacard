import React from 'react'
import './index.css'
const Booking = () => {
  return (
    <div className='booking'>
      <img className='book-image' src='https://res.cloudinary.com/dkfnuewqm/image/upload/v1693667965/Group_167_1_mn5x1f.png' alt='bookImage'/>
      <form className='form'>
        <div className='book-card'>
        <h3 className='book-head'>Book Now</h3>
        <p className='book-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='book-card-body'>
            <div className='city'>
                <label className='city-head' htmlFor='city'>City</label>
                <input placeholder='Placeholder' className='city-input' id='city' type='text'/>
            </div>
            <div className='form-control'>
                <div className='arrival-cont'>
                    <label className='arrival' htmlFor='arrival'>Arrival</label>
                    <input placeholder='10 October' className='arrival-input' id='arrival' type='text'/>
                </div>
                <div className='arrival-cont'>
                    <label className='arrival' htmlFor='arrival'>Departure</label>
                    <input placeholder='11 October' className='arrival-input' id='arrival' type='text'/>
                </div>
            </div>
            <div className='form-control'>
                <div className='arrival-cont'>
                    <label className='arrival' htmlFor='arrival'>Star</label>
                    <div className='star-cont'>
                        <button className='incr-btn' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 15 5" fill="none">
                            <path d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z" fill="black"/>
                            </svg>
                        </button>
                        <div className='star'>4</div>
                        <button className='incr-btn' type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div className='arrival-cont'>
                    <label className='arrival' htmlFor='arrival'>Room</label>
                    <div className='star-cont'>
                        <button className='incr-btn' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 15 5" fill="none">
                            <path d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z" fill="black"/>
                            </svg>
                        </button>
                        <div className='star'>1</div>
                        <button className='incr-btn' type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <button className='book-btn'>BOOK NOW</button>
      </form>
    </div>
  )
}

export default Booking
