import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter Email address' />
          <input type="password" placeholder='Enter password' />

        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>login here.</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms  of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
