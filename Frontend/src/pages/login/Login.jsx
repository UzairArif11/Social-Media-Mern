import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../apiCalls';
import { AuthContext } from '../../components/context/AuthContext';
import {CircularProgress} from "@material-ui/core"
const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user, isFecthing, error, dispatch} = useContext(AuthContext);
    const handleClick=(e)=>{
        e.preventDefault();
      loginCall({email:email.current.value ,password: password.current.value}, dispatch)
    };

  return (
 <div className="login container-fluid">
    <div className=" row">
        <div className="loginLeft col-md-6 col-12 py-5 align-items-center align-items-sm-start  ">
            <div className="loginLogo">Social.com</div>
            <div className="loginDesc">
                Connect with friends and the world around you on Social.com
            </div>
        </div>
        <div className="loginRight col-md-6 col-12">
        <form className="loginBox" onSubmit={handleClick}>
            <input type="Email" placeholder='Email' className="loginInput" required ref={email}/>
            <input type="Password" placeholder='Password' className="loginInput" minLength="6" required ref={password}/>
            <button className="loginButton" type= "submit" disabled={isFecthing}>{isFecthing ? <CircularProgress color='white' size='20px' />: "Log In"}</button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegisterButton">
            {isFecthing ? <CircularProgress color='white' size='20px' />: "Create a New Account "}
            </button>
        </form>
    </div>
 </div>
 </div>
  )
}

export default Login