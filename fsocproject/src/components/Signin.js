import React,{ useState } from 'react';
import "./Signin.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAppState } from '../Store/app.state';

export default function SignIn() {
  
  const Navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const setToken = useAppState((state)=> state.setToken)
  
  const userLogin = async () => {
    if(email === "" && password === ""){
      window.alert("Please enter Email and Password")
      return
    }
    if(email === ""){
      window.alert("Please enter Email")
      return
    }
    if(password === ""){
      window.alert("Please enter Password")
      return
    }

    const data = await axios.post("http://localhost:3001/login",{
      email,
      password
    })
    if (data.data.status === true){
      setToken(data.data.token)
      localStorage.setItem("token",data.data.token)
      Navigate("/rooms")
    }else{
      window.alert(data.data.message)
    }
  }

  return (
    <div className='signIn'>
        <div>
            <div className='logInForm'>
            <div>
            <input type = "email" name= "email" id="email" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
            <input type = "password" name= "password" id="password" value={password} placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={userLogin}>Sign In</button>
            </div>
            <div className='loginForm2'>
                Want to Join Us ?
                <Link to = "/signUP"><span  style={{color :"blue",cur:"pointer"}}> SignUp</span> </Link>
             </div>
        </div>
      
    </div>
  )
}