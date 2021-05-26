import React from 'react'
import './Checkbox.css'

export default function Checkbox() {
  return (
    
      <div className="bg">
      <h5 className="text">Coimbatore COVID Beds Availability Status</h5>
      <label className="container">Government
      <input type="checkbox" checked="check"></input>
      <span className="mark"></span></label>
      <label className="container">Private
      <input type="checkbox" checked="check"></input>
      <span className="mark"></span></label>
      <label className="container">COVID Hospitals(CHO - For Severe Cases)
      <input type="checkbox" checked="check"></input>
      <span className="mark"></span></label>
      <label className="container">COVID Health Centres(CHC - For Moderate Cases)
      <input type="checkbox" checked="check"></input>
      <span className="mark"></span></label>
      <label className="container">COVID Care Centres(CCC - For Mild Cases)
      <input type="checkbox" checked="check"></input>
      <span className="mark"></span></label>
      
      
      
    </div>
  )
}
 