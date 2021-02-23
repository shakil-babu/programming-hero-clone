import React from 'react'
import './Hero.css' ;
import img1 from '../../Images/slider/slider-01.png';
import img2 from '../../Images/slider/slider-02.png';
import img3 from '../../Images/slider/slider-03.png';
import img4 from '../../Images/slider/slider-04.png';
import {BsArrowRightShort} from 'react-icons/bs'
const HeroPage = () => {
    return (

              <div className='hero-section'>
             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="container">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="info">
                                    <h1>Complete Web Development Course with Jhankar Mahbub</h1>
                                    <p>একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে এই কোর্সে। </p>
                                    <div className="btn-area">
                                        <button className = 'btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 image-box">
                            <img src={img1} className="d-block w-100 img-fluid" alt={img1}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="info">
                                    <h1>Build 10 professional projects while learning.</h1>
                                    <p>কোর্সের অংশ হিসেবে হাতে কলমে নতুন দশটা প্রজেক্ট (এসাইনমেন্ট) করবে তুমি। আমরা তোমার প্রজেক্ট এর ফিডব্যাক দিবো। মার্কস দিবো। যাতে প্রফেশনাল ওয়েবসাইট বানিয়েই চাকরির ইন্টারভিউতে যেতে পারো। 💪</p>
                                    <div className="btn-area">
                                        <button className = 'btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 image-box">
                            <img src={img2} className="d-block w-100" alt={img2}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="info">
                                    <h1>Got stuck? We will always be there for you.</h1>
                                    <p>২৪ ঘন্টার মধ্যে কোর্স রিলেটেড সকল প্রশ্নের উত্তর দেয়ার জন্য চারজন প্রফেশনাল ওয়েব ডেভেলপার স্ট্যান্ডবাই থাকে (ছুটির দিন বাদে)। প্রয়োজনে গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করা হয়। 🥊</p>
                                    <div className="btn-area">
                                        <button className = 'btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 image-box">
                            <img src={img3} className="d-block w-100" alt={img3}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="info">
                                    <h1>Master everything you need to become a web developer.</h1>
                                    <p>ফ্রন্টএন্ড (HTML, CSS, JavaScript, ES6, bootstrap, React, charting), ব্যাকএন্ড (node, express, API), ডাটাবেজ (mongodb), ক্রোম ডেভ টুল, হোস্টিং, গিটহাব, ইন্টারভিউ প্রবলেম সলভিং - সবকিছু!</p>
                                    <div className="btn-area">
                                        <button className = 'btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 image-box">
                            <img src={img1} className="d-block w-100" alt={img1}/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="info">
                                    <h1>Start your dream today. Conquer the world.</h1>
                                    <p>সো, এক্ষুণি কোর্সে এনরোল করে ঝাঁপিয়ে পড়ো। তোমার লাইফের নতুন মিশন। হার্ডওয়ার্ক করবে তুমি। গাইডলাইন আর সাপোর্ট দিবো আমরা। পারলে ঠেকা!</p>
                                    <div className="btn-area">
                                        <button className = 'btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 image-box">
                            <img src={img4} className="d-block w-100" alt={img4}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
 
    )
}

export default HeroPage
