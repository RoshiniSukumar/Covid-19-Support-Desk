import React from 'react'
import './Cards.css'
import Cards from './Cards'
 
 const BedDetails = (props) => {
    console.log(props);
    
    const {details} = props;
    var n=details.length;
    console.log("length",n);
     
    const detailarr = []
    for (let i = 0;i<n;i++){
      var arr = details.slice(i*2,(i+1)*2);
      console.log("arr",arr);
      detailarr.push(
        <div className="bedfloat"> 
        { arr.map((del)=> 
          <Cards detail={del}></Cards>
        )}</div>
      )
    }
     
     console.log("detailarr",detailarr);
    // const renderBedDetails = props.details.map((detail) => {
    //     return(
    //        <Cards detail={detail}></Cards>
    //     );
    // })
  return (
    <div  >
       { detailarr};
    </div>
  )
}
 

export default BedDetails

