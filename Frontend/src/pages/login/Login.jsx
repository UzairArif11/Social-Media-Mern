import React from 'react'
import './login.css'

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
            <input type="Email" placeholder='Email' className="loginInput" />
            <input type="Password" placeholder='Password' className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegisterButton">
                Create a New Account 
            </button>
        </div>
    </div>
 </div>
 </div>
  )
}

export default Login