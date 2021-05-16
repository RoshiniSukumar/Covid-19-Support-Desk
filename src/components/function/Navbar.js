 import React from 'react'
 import './Navbar.css'
 export default function Navbar() {
   return (
     <div>
       <ul>
         <li><a className="active" href="#home">Home</a></li>
         <li><a href="#update">Update</a></li>
         <li><a href="#about">About</a></li>
       </ul>
     </div>
   )
 }
 