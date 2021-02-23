import React from 'react'
import './Next.css'
import {FcCalendar, FcSms, FcFlashOn, FcClapperboard} from 'react-icons/fc';
import{BsArrowRightShort} from 'react-icons/bs'
const Next = () => {
    return (
        <>
            <div className="container enroll-container">
                    <div className="row">
                        <div className="col-12">
                            <section className="next-area mt-4">
                                <h2 className='text-center'>পরবর্তী ব্যাচের সময় সূচি</h2>
                                <div className="grid">
                                    <div className="d-flex">
                                        <FcCalendar className='Icon'/>
                                        <p>রেজিস্ট্রেশন শুরু: জুন ১০, ২০২১ (বৃহস্পতিবার)</p>
                                    </div>
                                    <div className="d-flex">
                                        <FcSms className='Icon' />
                                        <p>ব্যাচের ওরিয়েন্টশন: জুন ২৮, ২০২১ (সোমবার)</p>
                                    </div>
                                    <div className="d-flex">
                                        <FcFlashOn className='Icon' />
                                        <p>রেজিস্ট্রেশন শেষ: জুন ২৪, ২০২১ (বৃহস্পতিবার)</p>
                                    </div>
                                    <div className="d-flex">
                                        <FcClapperboard className='Icon' />
                                        <p>ক্লাস শুরু: জুলাই ১, ২০২১ (বৃহস্পতিবার)</p>
                                    </div>
                                </div>
                                <div className="enroll-area">
                                    <div className=" enroll d-flex justify-content-between align-items-center text-light">
                                        <p className='enroll-title'>তুমি ৪র্থ ব্যাচে এনরোল করতে আগ্রহি হলে, ঝাঁপিয়ে পড়ো</p>
                                        <div className="area">
                                        <button className = 'enroll-btn-flex btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
            </div>  
        </>
    )
}

export default Next
