import React, {useState} from 'react'
import "./Signup.css"
import axios from 'axios'
import { Link,  useNavigate } from 'react-router-dom'

export default function SignUp() {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [profile, setProfile] = useState("")

  const NewUser = async function(){
    if(name === ""){
      window.alert("please enter name")
      return
    }
    if(email === ""){
      window.alert("please enter email")
      return
    }
    if(password === ""){
      window.alert("please enter password")
      return
    }
    if(phone === ""){
      window.alert("please enter phone")
      return
    }
    if(!Number(phone)){
      window.alert("please enter valid phone")
      return
    }
    if(profile === ""){
      window.alert("please enter image")
      return
    }
     
    const data = await axios.post("http://localhost:3001/createUser",{
      name,
      email,
      password,
      phone,
      profile
    }).then(()=> {
      console.log(data)
      Navigate("/signIn")
    }).catch((err)=>{
      window.alert(err.response.data.message)
    })

  }

  return (
    <div className="signUp">
        <div className='form-container'>
            <div className='form'>
            <div>
            <input type = "text" name= "name" id="name" placeholder='Full name' value={name} onChange = {(e)=> setName(e.target.value)} />
          </div>
          <div>
            <input type = "email" name= "email" id="email" placeholder='Email' value= {email} onChange = {(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <input type = {"password"} name= "password" id="password" placeholder='Password' value={password} onChange = {(e)=>setPassword(e.target.value)} />
          </div>
          <div>
            <input type = "phone" name= "phone" id="phone" placeholder='phone' value = {phone} onChange = {(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <input type = "file" name = "profile" id="profile" placeholder = "Profile"  onChange={(e)=>setProfile(e.target.files[0])} />
          </div>
          <button type="button" className="btn btn-primary" onClick = {NewUser}>Sign Up</button>
        </div>
        <div className='form2'>
            Already A Member ? 
            <Link to ="/signIn">         
              <span style={{color:"blue",cursor:"pointer"}}> Sign In</span>
              </Link>
 
        </div>
        </div>
    </div>
  )
}