import React from 'react'
import AboutSuccess from '../Common/AboutSuccess'
import {member} from './AboutData';
import './About.css';
const About = () => {
    return (
        <>
            <section className="about-us-area mt-4 pt-4">
                <AboutSuccess
                
                about = {true}
                title = 'Programming Hero'
                content = 'আমরা প্রোগ্রামিং হিরো হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি প্রোগ্রামিং হিরো হতে চায় তাদের হেল্প করা। তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন জিনিস শিখছি, চেষ্টা করছি।'
                />

                <div className="container mb-5">
                    <div className="grid-layout">
                        {
                            member.map((item) => {
                                return <div className="member-card text-center p-2">
                                    <img src={item.img} alt={item.img} className="img-fluid"/>
                                    <h4 className='member-name'>{item.name}</h4>
                                    <p>{item.position}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>   
        </>
    )
}

export default About
