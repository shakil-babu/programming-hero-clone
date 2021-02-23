import React from 'react'
import './LR.css';
import img from '../../Images/features.png'
import {BsArrowRightShort} from 'react-icons/bs'
const LR = ({title,email,password,name ,phone,check,forgot}) => {
    return (
        <>
            <section className="area-card py-5">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                           <div className="login-register-card p-5">
                           <h3 className="login-register-title mb-4">{title}</h3>
                            <form action="">
                                {name && <input type="text" placeholder='Name' name='' className='form-control mb-3' />}
                                {email && <input type="email" placeholder='Email' name='' className='form-control mb-3' />}
                                {password && <input type="password" placeholder='********' name='' className='form-control mb-3' />}
                                {phone && <input type="text" placeholder='Number' name='' className='form-control mb-3' />}

                                <div className="d-flex justify-content-between align-items-center login-data-flex">
                                <div className="d-flex my-4">
                                    <input className='mr-2 mb-2 checkbox' type="checkbox"/> <label className='check-title' htmlFor="">{check}</label>
                                </div>
                                {forgot && <a className='forgot'>Forgot Password</a>}
                                </div>
                                <button type='submit' className = 'btn-block btn btn-danger btn-fancy'>{title}<span><BsArrowRightShort className='arrow' /></span></button>
                               
                            </form>
                           </div>
                        </div>
                        <div className="col-lg-6 col-12 login-register-img mt-lg-0 mt-3">
                            <img src={img} alt={img} className="img-fluid ml-lg-5"/>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default LR
