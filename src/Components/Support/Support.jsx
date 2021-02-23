import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai';
import {FaEdit } from "react-icons/fa";
import './Support.css'
import {firstSupport, knowFacilities} from './SupportData'
const Support = () => {
    const [action, setAction] = useState(true);
    const clickHandler = ()=>{
        setAction(!action)
    }
    return (
        <>
            <section className="support-area my-5">
                <div className="container h-100 py-md-3">
                    <div className="d-flex justify-content-around m-auto p-4 course-info">
                        <div className={action ? 'course-box text-center red-border':'course-box text-center'} onClick ={clickHandler} >                                
                                     <AiFillStar className={action ? 'course-icon red-color':'course-icon'} />
                                    <h5 className = {action ? 'red-color':'color'}>এই কোর্সের বিশেষত্ব কি?</h5>
                            </div>
                            <div className={!action ? 'course-box text-center red-border':'course-box text-center'} onClick ={clickHandler} >                                
                                     <FaEdit className={!action ? 'course-icon red-color':'course-icon'} />
                                    <h5 className = {!action ? 'red-color':'color'}>এই কোর্স কিভাবে চলবে?</h5>
                            </div>
                     
        
                    </div>

                    {
                        action ? (
                            <div className='grid-showcase'>
                        {
                            firstSupport.map((item) => {
                                return <div className="d-flex course-info-box">
                                    
                                        <img src={item.img} alt={item.img}/>
                                   
                                    <div className="img-info">
                                        <h3>{item.heading}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                        ):(
                            <div className="grid-showcase">
                                {
                                    knowFacilities.map((item) => {
                                        return <div className="course-info-box d-flex">
                                            <h1 className='display-1 number'>{item.sl}</h1>
                                            <p>{item.text}</p>
                                        </div>
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Support
