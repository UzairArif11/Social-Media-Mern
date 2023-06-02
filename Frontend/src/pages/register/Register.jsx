import React from 'react'
import './register.css'

const Login = () => {
  return (
 <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">Social.com</div>
            <div className="loginDesc">
                Connect with friends and the world around you on Social.com
            </div>
        </div>
        <div className="loginRight">
        <div className="loginBox">
            <input type="text" placeholder='Username' className="loginInput" />
            <input type="Email" placeholder='Email' className="loginInput" />
            <input type="Password" placeholder='Password' className="loginInput" />
            <input type="Password" placeholder='Password Again' className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
                Login into Account 
            </button>
        </div>
    </div>
 </div>
 </div>
  )
}

export default Login