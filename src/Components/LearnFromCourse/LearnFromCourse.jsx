import React from 'react'
import './Design.css';
import web from '../../Images/web.png'
import {lecture, quizData} from './LectureData';
import {BsArrowRightShort}from 'react-icons/bs'
import ssl from '../../Images/ssl.png';
import stripe from '../../Images/stripe.png'
import {AiFillCheckSquare} from 'react-icons/ai';
import {courseInfo} from './CourseInfoData'
const LearnFromCourse = () => {
    return (
        
            <seciton className="learn-area">
                <div className="container">
                    <h3 className='text-center mt-5 pt-4 mb-5'>এই কোর্স থেকে কি কি শিখতে পারবে:</h3>
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="lecture-area">
                                <img src={web} alt={web} className='img-fluid web' />
                               <div className="d-flex justify-content-between mt-3 lecture-card">
                               {
                                    lecture.map((item) => {
                                        return <div className='enroll-card-lecture-info text-center'>
                                            <img src={item.img} alt={item.img}/>
                                            <h4>{item.number}</h4>
                                            <h5>{item.title}</h5>
                                        </div>
                                    })
                                }
                               </div>

                               <div className="d-flex justify-content-between my-4 data-area">
                                   {
                                       quizData.map((item) => {
                                          return <div className="d-flex data-box">
                                               <img src={item.img} alt={item.img} />
                                               <h4>{item.number}</h4>
                                           </div>
                                       })
                                   }
                               </div>
                               <h3 className="price">৳ 5500</h3>
                               <div className="btn-area">
                                        <button className = 'btn-block btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                </div>

                                <div className="d-flex payment mt-4">
                                    <h5 className=' mr-3 '>Payment System: </h5>
                                    <img src={ssl} alt={ssl}/>
                                    <img src={stripe} alt={stripe}/>
                                </div>
                                <h4 className='bkash-option'>Manual bKash: ০১৩০৮৫৪৩৭৬৮ (মার্চেন্ট অ্যাকাউন্ট)</h4>
                                  
                             
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="grid-box">
                                {
                                    courseInfo.map(text => {
                                        return <div className="d-flex">
                                            <AiFillCheckSquare className='color-icon' />
                                            <p>{text}</p>
                                        </div>
                                    })
                                }
                            </div>
                            <p className='mt-3'>তবে যারা একটু ফাঁকিবাজ তাদের জন্য দুঃসংবাদ হচ্ছে। প্রত্যেক ভিডিও এর পরে প্রশ্ন থাকছে। প্রত্যেক মডিউল শেষে ফাইনাল কুইজ আছে। আর প্রত্যেকটা প্রজেক্টের পর একটা করে টেক-এওয়ে হোমওয়ার্ক আছে।

এই কোর্স ফলো করে কেউ যদি ওয়েব ডেভেলপার না হতে পারে, দুনিয়ার আর কেউ তাকে ওয়েব ডেভেলপার বানাতে পারবে না।</p>
                        </div>
                    </div>
                </div>
            </seciton>   
        
    )
}

export default LearnFromCourse
