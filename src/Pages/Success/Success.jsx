import React, { useState } from 'react'
import AboutSuccess from '../Common/AboutSuccess'
import './Success.css';
import {SuccessData} from './Data';
import SingleSuccess from './SingleSuccess';
const Success = () => {
    const first = SuccessData.slice(0,10);
    const second = SuccessData.slice(11,20);
    const third = SuccessData.slice(21,30);
    const fourth = SuccessData.slice(31,40);
    const [pages, setPages] = useState({
        first:true,
        sec:false,
        third:false,
        four:false
    })

    const visible  = pages.first ? first : pages.sec ? second : pages.third ? third : fourth ;
    return (
        <>
            <section className="success-area py-5">
                <AboutSuccess
                
                about = {false}
                title = 'Successful Students'
                content = 'আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো'

                />
                <div className="container">
                    <div className="grid-showcase">
                        {
                            visible.map((item) => {
                                return <SingleSuccess  item = {item} />
                            })
                        }
                    </div>

                </div>

                <div className="d-flex justify-content-center pagination">
                    <button onClick = {() => setPages({first:true})}>1</button>
                    <button onClick = {() => setPages({sec:true})}>2</button>
                    <button onClick = {() => setPages({third:true})}>3</button>
                    <button onClick = {() => setPages({four:true})}>4</button>
                </div>
            </section>   
        </>
    )
}

export default Success
