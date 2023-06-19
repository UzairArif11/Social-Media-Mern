import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();
    const URLR = process.env.REACT_APP_URL;
    const handleClick=async(e)=>{
        e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!")
    }else{
       const user ={
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
       };
      try {
       await axios.post(`${URLR}/auth/register`, user)
       navigate("/")
      } catch (error) {
        console.log(error)
      }
    }
    };
  return (
 <div className="login container-fluid">
    <div className="loginWrapper row">
        <div className="loginLeft col-md-6 col-12 py-5 align-items-center align-items-sm-start ">
            <div className="loginLogo">Social.com</div>
            <div className="loginDesc">
                Connect with friends and the world around you on Social.com
            </div>
        </div>
        <div className="loginRight col-md-6 col-12 ">
        <form className="loginBox" onSubmit={handleClick} >
            <input type="text" required ref={username} placeholder='Username' className="loginInput my-2" />
            <input type="Email" required ref={email} placeholder='Email' className="loginInput my-2" />
            <input type="Password" required ref={password} placeholder='Password' minLength="6" className="loginInput my-2" />
            <input type="Password" required ref={passwordAgain} placeholder='Password Again' className="loginInput my-2" />
            <button type='submit' className="loginButton my-2">Sign Up</button>
            <button className="loginRegisterButton my-2">
                Login into Account 
            </button>
        </form>
    </div>
 </div>
 </div>
  )
}

export default Login