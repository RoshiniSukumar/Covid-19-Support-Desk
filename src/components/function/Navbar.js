 import React from 'react'
 import './Navbar.css'
 import { Link } from "react-router-dom"
 export default function Navbar() {
   return (
     <div className="body">
       <nav>
        
         <Link to="/">Home</Link>
         <Link Link to="/tracker">Covid Tracker</Link>
         <Link to="/login">Hospital-login</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Whom to Contact</Link>
         <div className="animation start-home"></div>
        </nav>
     </div>
   )
 }
 /*<ul>
         <li><Link to="/" className="active" >Home</Link></li>
         <li><a href="#update">Hospital login</a></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Whom to Contact</Link></li>
       </ul>*/
 