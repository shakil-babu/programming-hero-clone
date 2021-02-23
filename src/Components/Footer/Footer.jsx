import React from 'react' ;
import logo from '../../Images/icons/logo.png';
import './Footer.css';
import {FaLocationArrow, FaSms, FaPhone} from 'react-icons/fa';
import play from '../../Images/icons/play.png'; 
import pay from '../../Images/icons/bkash.png'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
const Footer = () => {
    return (
        <>
            <section className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 mt-2">
                        <a className="navbar-brand" href="#"><img className = 'img-fluid brand-logo' src={logo} alt={logo}/></a>
                        <div className="d-flex text-light footer-first">
                            <FaLocationArrow className='mt-2 mr-2 footer-icon' />
                            <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        </div>
                        <div className="d-flex text-light footer-first">
                            <FaSms className='mt-2 mr-2 footer-icon' />
                            <p>Official: programming.hero1@gmail.com</p>
                        </div>
                        <div className="d-flex text-light footer-first">
                            <FaPhone className='mt-2 mr-2 footer-icon' />
                            <p>Helpline : 01320976430 (Available : 09:00am to 11:00pm)</p>
                        </div>
                        <img className='img-fluid play-btn' src={play} alt={play}/>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                            <ul className = 'footer-ul'>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Success</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Terms and Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                            <div className="social-icons">
                                <AiFillFacebook className='facebook Icon' />
                                <AiFillInstagram className = 'instragram Icon' />
                                <AiFillLinkedin className = 'linkedin Icon' />
                                <AiFillYoutube className='youtube Icon'/>  
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                            <img src={pay} alt={pay} className="img-fluid"/>
                        </div>
                        <p className='text-light mt-4' style={{textAlign:'center', width:'400px', margin:'auto'}}>Copyright © 2021 Programming-hero.com</p>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Footer
