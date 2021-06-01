import React from 'react'


const Check= ({ type = 'checkbox',name,checked=false,onChange}) => {
     console.log("bed Availability status:",name,checked);

  return (<input type={type} name={name} checked={checked} onChange={onChange}/>
     
  )
}

export default Check;
