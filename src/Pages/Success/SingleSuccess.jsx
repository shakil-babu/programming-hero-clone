import React, { useState } from 'react'
import './Success.css';
const SingleSuccess = ({item}) => {
    const [more, setMore] = useState(true);
    return (
        <>
            <section className="single-success-card">
                <div className="d-flex single-img-area">
                    <img src={item.img} alt={item.img} className='success-img'/>
                    <p className='success-opinion p-4'>{more ? item.opinion.substr(0,200): item.opinion}  <button onClick ={() => setMore(!more)} className='show-more-btn'>{more ? 'Read more' : 'Show less'}</button> </p>
                </div>

                <div className="identity-desc" style={{background:`${item.color}`}}>
                    <div className="d-flex justify-content-between">
                        <div className="person-info pl-3">
                            <h4 className='text-light'>{item.name}</h4>
                            <p>{item.position}</p>
                        </div>
                        <div className="batch" style={{background:`${item.semi}`}}>
                            <p>{item.batch}</p>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default SingleSuccess
