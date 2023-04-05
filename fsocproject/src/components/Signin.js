import React from 'react';
import "./Signin.css";
import { Link } from 'react-router-dom';



export default function signIn() {
  return (
    <div className='signIn'>
        <div>
            <div className='logInForm'>
            <div>
            <input type = "email" name= "email" id="email" placeholder='Email'/>
            </div>
            <div>
            <input type = "password" name= "password" id="password" placeholder='Password'/>
            </div>
            <input
             type= "submit"  id = "logIn" value ="Sign In"/>
        
                 
            </div>
            <div className='loginForm2'>
                Want to Join Us ?
                <Link to = "/signUP"><span  style={{color :"blue",cur:"pointer"}}>SignUp</span> </Link>
             </div>
        </div>
      
    </div>
  )
}