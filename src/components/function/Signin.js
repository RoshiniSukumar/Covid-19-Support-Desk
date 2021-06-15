import React, { useState } from 'react'
import Login from './Login'
import  FormDetails from './FormDetails'
 
function  Signin() {
    const [signin, setsignin] = useState(false)
    console.log(signin)

    function signevent(newvalue){
        setsignin(newvalue)
    }
    var signuppg = signin ?   <FormDetails   />  : <Login set={signevent}/> 
  return (
    <div>
      
         
         {signuppg}
         
         
    </div>
  )
}

export default Signin


    
