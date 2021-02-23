import React from 'react'
import LR from '../Common/LR'

const Register = () => {
    return (
        <>
            <section className="register-area mt-4 pt-5">
                <LR
                
                title='Register'
                email={true}
                password ={true}
                name = {true}
                phone = {true}
                check = 'I agree to the terms and conditions'
                forgot = {false}
                
                />
            </section>   
        </>
    )
}

export default Register
