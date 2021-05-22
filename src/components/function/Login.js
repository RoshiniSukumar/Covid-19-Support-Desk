import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="box">
        <h2>Login</h2>
        <form method="post">
            <div className="txt_field">
                <input type="text" required="required"></input>
                <span>Username</span>
            </div>
            <div className="txt_field">
                <input type="password" required></input>
                <span>Password</span>
            </div>
            <div className="pass">Forgot Password ?</div>
            <input type="submit" value="Login"></input>
            <div className="sign_up">
                Not a member? <a href="./Update.js">Signup</a>
            </div>
            
        </form>
      
    </div>
  )
}


