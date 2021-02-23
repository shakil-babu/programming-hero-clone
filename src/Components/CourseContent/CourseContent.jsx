import React from 'react'
import './Course.css';
import web from '../../Images/web.png';
import {BsArrowRightShort} from 'react-icons/bs';
import {Data} from './CourseOutline'
import Info from './Info';
const CourseContent = () => {
    return (
        <>
            <section className="course-content my-5">
                <div className="container">
                    <h3 className="text-center mb-5 course-title">কোর্সে যা কিছু আছে</h3>
                    <div className="row mb-4">
                        <div className="col-md-6 col-12 content-card">
                            <img src={web} alt={web} className='img-fluid mb-3' style= {{borderRadius:'10px'}} />
                            <div className="btn-area">
                                <button className = 'btn-block btn btn-danger btn-fancy'>Enroll Now <span><BsArrowRightShort className='arrow' /></span></button>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-md-0 mt-lg-0 my-3">
                            <div className="course-outline">
                                {
                                    Data.map((item) => {
                                        return <Info item = {item}/>

                                    })
                                }
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default CourseContent
