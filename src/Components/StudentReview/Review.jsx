import React from 'react'
import {Reviewdata} from './ReviewData';
import {FaStar} from 'react-icons/fa';
import './Review.css';
import {BsArrowRightShort} from 'react-icons/bs'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { NavLink } from 'react-router-dom';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Review = () => {
    return (
        <section className="review-section py-5">
            <div className="container pb-5">
                <h4 className="text-center py-5 review-title"> স্টুডেন্টদের কোর্স সম্পর্কে মতামত </h4>
            <Swiper

        breakpoints={{
            // when window width is >= 992px
            992: {
            slidesPerView: 2
            },
           768:{
               slidesPerView:1
           },
           568:{
               slidesPerView:1
           },
           230:{
               slidesPerView:1
           }
        }}

            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
    >
      {
        Reviewdata.map((item) => {
           return <SwiperSlide key={item.id} className='slide'>
                <div className="slide-area-card pt-5">
                <div className="review-card p-3 text-center pt-5">
                    <div className="img-area">
                        <img src={item.img} alt={item.img}  />
                    </div>
                <h5>{item.name}</h5>
                <div className="star-area d-flex justify-content-center my-3">
                        <FaStar style={{color:'orange'}} />
                        <FaStar style={{color:'orange'}} />
                        <FaStar style={{color:'orange'}} />
                        <FaStar style={{color:'orange'}} />
                        <FaStar style={{color:'orange'}} />
                    </div>
                    <p className='review-content' className='mt-3'>{item.review}</p>
                </div>
                </div>
            </SwiperSlide>
        })

        
      }
   
    </Swiper>
    <div className="btn-area d-flex justify-content-center mt-5">
        <NavLink to='/success' className = 'btn btn-danger btn-fancy'>View Success Page<span><BsArrowRightShort className='arrow' /></span></NavLink>
     </div>
            </div>
        </section>
    
    )
}

export default Review
