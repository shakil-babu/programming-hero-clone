import React,{useState} from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
const Info = ({item}) => {
    const [click, setClick] = useState(true);
    return (
        <>
            <div onClick ={() => setClick(!click)}  className="d-flex justify-content-between p-2">
                <h5 className='milestone-title'>{item}</h5>
                <button className='milestone-btn'> {click ? <IoIosArrowUp className='milestone-icon' /> : <IoIosArrowDown className='milestone-icon' />} </button>
            </div>
            {
                click || <div className="bg-light p-3"></div>
            }
        </>
    )
}

export default Info
