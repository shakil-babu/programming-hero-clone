
import './Style.css'
import logo from '../../Images/icons/logo.png';
import {FiShoppingCart} from 'react-icons/fi'
import {NavLink} from 'react-router-dom';
import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
    const [cart, setCart] = useState(0);
    const [emty, setEmty] = useState(false);
    const active = {
        borderBottom:' 1px solid white'
    }

    const cartHandler = () => {
        setEmty(!emty);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    
                    <NavLink to ='/' className="navbar-brand pt-3"><img className = 'brand-logo' src={logo} alt=""/></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mb-3 pt-2 mt-lg-0 align-items-center">
                        <li className="nav-items">
                            <NavLink activeStyle ={active} to='/about-us' className="nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item next-cart" style={{cursor:'pointer'}}>
                            <div onClick={cartHandler}  className="shoping-cart">
                            <FiShoppingCart className = 'cart-icon' />
                            <span className='cartAmountBadge'>{cart}</span>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle ={active} to='/success' className="nav-link" >Success</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to='/login' className='btn btn-login'>Login</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to ='/register' className='btn btn-restration'>Register</NavLink>
                        </li>
                        </ul>
  </div>
                </div>
            </nav>   
            {
             emty && (
                <div className="p-3 bg-light cart-area text-center">
                <div className="shoping-bg">
                <FaShoppingCart className='cart' />
                </div>
                <h3 className='py-2'>You are not added courses in cart</h3>
                <button className='Btn btn-block'>Checkout</button>
        </div> 
             )
            }
        </>
    )
}

export default Navbar
