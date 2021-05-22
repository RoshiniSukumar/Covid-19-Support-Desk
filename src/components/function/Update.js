import React from 'react'
import './Update.css'

export default function Update() {
  return (
    <div className="contain">
      <form id="form1">
          <h3>Create Account</h3>
          <input type="text" placeholder="Email" required></input>
          <input type="password" placeholder="Password" required></input>
          <input type="password" placeholder="Confirm Password" required></input>

          <div className="btn-box">
              <button type="button" id="next1">Next</button>
          </div>
      </form>
      
      <form id="form2">
          <h3>Centres details</h3>
          <input type="text" placeholder="Name of the Hospital/Centre" required></input>
          <input type="text" placeholder="Address" required></input>
          <input type=" phone number" placeholder="Contact Number" required></input>

          <div class="btn-box">
              <button type="button" id="back1">Back</button>
              <button type="button" id="next2">Next</button>
          </div>
      </form>

      <form id="form3">
          <h3>Beds Availability Details</h3>
          <input type="number" placeholder="Normal" required></input>
          <input type="number" placeholder="ICU" required></input>
          <input type="number" placeholder="Oxygen" required></input>
          <input type="number" placeholder="Total" required></input>

          <div className="btn-box">
              <button type="button" id="back2">Back</button>
              <button type="submit">Submit</button>
          </div>
      </form>

      <div className="step-row">
          <div id="progress"></div>
          <div className="step-col"><small>Step 1</small></div>
          <div className="step-col"><small>Step 2</small></div>
          <div className="step-col"><small>Step 3</small></div>
          
      </div>
    </div>
  )
}
