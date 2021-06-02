import React from 'react'
import './Cards.css'
 
const BedDetails = (props) => {
    console.log(props);

    const renderBedDetails = props.details.map((detail) => {
        return(
            <div>
            <div className="main center">
            <div className="box center"> 
          <h2> <div className="hname">{detail.hospitaltype} - 
            {detail.hospitalname}</div></h2>
           <div className="address">{detail.address} <br/>
            Ph No:{detail.contactnumber}</div>
           <div classname="beds">
            <h4>Beds count in the form of Vacancy/Total</h4>
           Normal:{detail.normalbed} <br/>
           ICU:{detail.icubed} <br/>
           Oxygen:{detail.o2bed} <br/>
           Total:{detail.total}</div>
           </div>
           </div>
           </div>
        );
    })
  return (
    <div>
       {renderBedDetails}
    </div>
  )
}

 



export default BedDetails

