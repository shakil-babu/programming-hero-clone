import React from 'react'
import './LR.css';
const AboutSuccess = ({about , title , content}) => {
    return (
        <>
            <section className="common-area mt-4 text-center text-light py-5">
                <div className="row">
                    <div className="col-md-5 m-auto">
                    {about && <h5 className='about-title'>About</h5>}
                    <h5 className='about-title py-2'>{title}</h5>
                    <p className="content-common">{content}</p>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default AboutSuccess
