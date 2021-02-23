import React from 'react'
import './Project.css'
import {pdata} from './ProjectData';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Project = () => {

    return (
        <>
            <section className="project-area py-5">
                <div className="container py-5">
                    <div className="project-title">
                    <h3 className="title text-center ">এই ১০ টা প্রোজেক্ট তুমি করবে</h3>
                    <p className='text-center mb-5 p-title'>প্রোগ্রামিং কনসেপ্ট, স্কিল শেখানোর পাশাপাশি আমরা আরও বাড়তি ৫ টা প্রোজেক্ট করে দেখিয়ে দিবো তুমি এই ১০ টা প্রোজেক্ট যেনও নিজে করতে পারো। কেউ এই ১০টা প্রজেক্ট বুঝে বুঝে করতে পারলে তাকে আর কেউ ঠেকাতে পারবে না।</p>
                    </div>

    <Swiper

    
breakpoints={{
    // when window width is >= 640px
    992: {
        slidesPerView: 3
        },
       768:{
           slidesPerView:2
       },
       568:{
           slidesPerView:1
       },
       230:{
           slidesPerView:1
       }
}}
        
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >


    {
        pdata.map((item) => {
            return <SwiperSlide>
                <div className="project-card p-lg-3 p-3">
                    <img className='project-card-img' src={item.img} alt={item.img}/>
                    <div className="d-flex mt-3">
                        {
                            item.buttons.map((btn) => {
                                return <button className='project-btn'>{btn}</button>
                            })
                        }
                    </div>
                    <h3 className='project-title'>{item.title}</h3>
                    <p className='project-text pb-md-5 pb-lg-0 pb-5'>{item.text}</p>
                </div>
            </SwiperSlide>
        })
    }

    </Swiper>

                </div>
            </section>   
        </>
    )
}

export default Project
