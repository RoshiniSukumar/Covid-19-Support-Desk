import React, { useState } from 'react'
import Register from './Register'
import  FormDetails from './FormDetails'
 

function Signup() {
    const [signup, setsignup] = useState(false)
    console.log(signup)

    function signevent(newvalue){
        setsignup(newvalue)
    }
    var signuppg = signup ?   <FormDetails   />  : <Register set={signevent}/> 
  return (
    <div>
      
        <p className="condition1">***This page is for hospital use only!</p>
         {signuppg}
         
         
    </div>
  )
}

export default Signup

