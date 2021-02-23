import React, { useState } from 'react'
import './Design.css';
import img from '../../Images/icons/features.png'
import {Question} from './QuestionData'
import Info from './Info';
const Frequently = () => {
    return (
        <>
            <section className="frequently-asked-question mt-3 py-5">
                <div className="container">
                    <h4 className='text-center text-light mb-4'>কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা</h4>
                    <div className="row">
                        <div className="col-md-7 col-12">
                            {
                                Question.map((item) => <Info item = {item} />)
                            }
                        </div>
                        <div className="col-md-5 d-flex justify-content-center align-items-center">
                            <div className="img-area-component">
                                <img src={img} alt={img}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Frequently
