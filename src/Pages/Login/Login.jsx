import React from 'react'
import LR from '../Common/LR'

const Login = () => {
    return (
        <>
            <section className="login-area mt-4 pt-5">
                <LR
                
                title='Login'
                email={true}
                password ={true}
                name = {false}
                phone = {false}
                check = 'Remember Me'
                forgot = {true}
                
                
                />
            </section>   
        </>
    )
}

export default Login
