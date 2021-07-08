import React, { useState } from 'react'
import Register from './Register'
import  Regdetails from './Regdetails'
 

function Signup() {
    const [signup, setsignup] = useState(false)
    console.log(signup)

    function signevent(newvalue){
        setsignup(newvalue)
    }
    var signuppg = signup ?   <Regdetails   />  : <Register set={signevent}/> 
  return (
    <div>
      
        <p className="condition1">***This page is for hospital use only!</p>
         {signuppg}
         
         
    </div>
  )
}

export default Signup

