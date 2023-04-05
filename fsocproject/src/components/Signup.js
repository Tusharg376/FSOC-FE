import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

export default function SignUP() {
  return (
    <div className="signUp">
        <div className='form-container'>
            <div className='form'>
          <div>
            <input type = "email" name= "email" id="email" placeholder='Email'/>
          </div>
          <div>
            <input type = "text" name= "name" id="name" placeholder='Full name'/>
          </div>
          <div>
            <input type = "password" name= "password" id="password" placeholder='Password'/>
          </div>
          <div>
            <input type = "phone" name= "phone" id="phone" placeholder='phone'/>
          </div>
          <input type="submit" id="submit-btn" value ="Sign Up"/>
        </div>
        <div className='form2'>
            Already A Member ? 
            <Link to ="/signIn">         
              <span style={{color:"blue",cursor:"pointer"}}>Sign In</span>
              </Link>
 
        </div>
        </div>
    </div>
  )
}