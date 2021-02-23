import React from 'react'
import {BsArrowRightShort} from 'bs';
import {FaTimes} from 'react-icons/fa';
import './Enroll.css';
const Enroll = () => {
    return (
        <>
            <section className="enroll-area">
                <div className="container">
                    <div className="enroll-box p-4">
                        <FaTimes />
                        <p>তুমি আমাদের ৪র্থ ব্যাচে এনরোল করতে আগ্রহী হলে আমাদের ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো , আমরা তোমাকে ৪র্থ ব্যাচের সকল আপডেট জানিয়ে দিবো |</p>
                        <div className="btn-area">
                            <button className = 'btn btn-danger btn-fancy'>Register Now <span><BsArrowRightShort className='arrow' /></span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enroll
