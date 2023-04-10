import React from "react"
// import {Link} from "react-router-dom"
import Background from '../homepage.jpg'

export default function Homepage() {
    return (
      <div className="homepage">
        <img className="background" src= {Background} style ={{height:"38rem",width:"84rem"}} alt = "background"/>
      </div>
   );
}