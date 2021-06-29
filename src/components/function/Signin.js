import React, { useState } from 'react'
import Login from './Login'
import  FormDetails from './FormDetails'
 
function  Signin() {
    const [signin, setsignin] = useState(false)
    console.log(signin)
     const [hpll,sethpll] = useState("")
    function signevent(newvalue){
      console.log("newvalue",newvalue)
        setsignin(newvalue)
    }
    function sethpl(newvalue){
         sethpll(newvalue)
  }
    var signuppg = signin ?   <FormDetails  />  : <Login  set={signevent}/> 
  return (
    <div>
      
         
         {signuppg}
         
         
    </div>
  )
}

export default Signin


    
