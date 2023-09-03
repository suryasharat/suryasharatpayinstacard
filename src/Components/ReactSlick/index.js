import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const ReactSlick = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div>
       
        <h2 className='dest'>Our Destinations</h2>
        <Slider {...settings}>
            
          <div className='sli-card'>
            <img className='card-img' src="https://res.cloudinary.com/dkfnuewqm/image/upload/v1693736496/card-image_1_yipduz.png" alt='card'/>
            <h3 className='sli-head'>Harvard University</h3>
            <div className='sli-para-cont'>
                <p className='sli-para'>Cambridge, Massachusetts, UK</p>
                <button className='sli-btn' type='button'>...</button>
            </div>
          </div>
          <div className='sli-card'>
            <img className='card-img' src="https://res.cloudinary.com/dkfnuewqm/image/upload/v1693739642/card-image-1_qxsvw1.png" alt='card'/>
            <h3 className='sli-head'>Oxford University</h3>
            <div className='sli-para-cont'>
                <p className='sli-para'>Oxford, England</p>
                <button className='sli-btn' type='button'>...</button>
            </div>
          </div>
          <div className='sli-card'>
            <img className='card-img' src="https://res.cloudinary.com/dkfnuewqm/image/upload/v1693739741/card-image-2_pjf2ex.png" alt='card'/>
            <h3 className='sli-head'>Stanford University</h3>
            <div className='sli-para-cont'>
                <p className='sli-para'>Stanford, California</p>
                <button className='sli-btn' type='button'>...</button>
            </div>
          </div>
          <div className='sli-card'>
            <img className='card-img' src="https://res.cloudinary.com/dkfnuewqm/image/upload/v1693736496/card-image_1_yipduz.png" alt='card'/>
            <h3 className='sli-head'>Nanyang Technological University</h3>
            <div className='sli-para-cont'>
                <p className='sli-para'>Nanyang Ave, Singapura</p>
                <button className='sli-btn' type='button'>...</button>
            </div>
          </div>
          
        </Slider>
       
      </div>
    )
  }

export default ReactSlick
