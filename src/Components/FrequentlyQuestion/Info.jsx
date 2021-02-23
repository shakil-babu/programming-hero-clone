import React,{useState} from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi';
import './Design.css'
const Info = ({item}) => {
    const [action , setAction] = useState(false);
    return (
        <>
             <main>
                <div onClick={() => setAction(!action)} className="d-flex content align-items-center pb-2">
                    {action ? <BiMinus className='plus-sign' /> : <BiPlus className='plus-sign minus-sign' />}
                    <h5 className="title mt-2">{item.title}</h5>
                </div>
                {
                action && (
                <div className="p-3 content-text">
                    <p className='text-light ml-4'>{item.text}</p>
                </div>
                )
                }
             </main>
        </>
    )
}

export default Info
