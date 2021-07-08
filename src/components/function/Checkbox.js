import React, { useState} from 'react';
import  './Checkbox.css';
 
const Checkbox = (props) =>{
  
  const [privatee,setprivatee] = useState(false)
  const [govt,setgovt] = useState(false)
  const [chc,setchc] = useState(false)
  const [ccc,setccc] = useState(false)
  const [cho,setcho] = useState(false)
  const [iccc,seticcc] = useState(false)
  const [isChecked,setIsChecked] = useState(new Map());
  const handleChange = (event) =>{
    setIsChecked(isChecked => isChecked.set(event.target.name,event.target.checked));
    console.log("is checked",isChecked);
   
  }
 

  const handler = (e) => {
     e.preventDefault()
    props.p(privatee);
    props.g(govt);
    props.c(ccc);
    props.o(cho);
    props.h(chc);
    props.i(iccc);
  };

  return (
   <form className="chkbx">
      <h4 className="text">Coimbatore COVID Beds Availability Status</h4>
       
        
       <label className="container">Government
      <input type="checkbox" 
      onChange={(e)=>{setgovt(e.target.checked)}}></input>
      <span className="mark"></span></label>

      <label className="container">Private 
      <input type="checkbox"    
      value="Private"
      onChange={(e)=>{setprivatee(e.target.checked)}}></input>
      <span className="mark"></span></label>

      <label className="container">COVID Hospitals(CHO - For Severe Cases)
      <input type="checkbox"   
      onChange={(e)=>{setcho(e.target.checked)}}></input>
      <span className="mark"></span></label>

      <label className="container">COVID Health Centres(CHC - For Moderate Cases)
      <input type="checkbox"    
      onChange={(e)=>{setchc(e.target.checked)}}></input>
      <span className="mark"></span></label>

      <label className="container">COVID Care Centres(CCC - For Mild Cases)
      <input type="checkbox"   
      onChange={(e)=>{setccc(e.target.checked)}}></input>
      <span className="mark"></span></label>

      <label className="container">Interim COVID Care Centres(ICCC - For Mild Cases)
      <input type="checkbox"    
      onChange={(e)=>{seticcc(e.target.checked)}}></input>
      <span className="mark"></span></label>
       
      <button onClick={handler}>submit</button>
   </form>
      
    
  )
}


export default Checkbox
 
/*const Checkbox = () =>{
  const [isChecked,setIsChecked] = useState(new Map());
  const handleChange = (event) =>{
    setIsChecked(isChecked => isChecked.set(event.target.name,event.target.checked));
    console.log(isChecked);
  }
 
  const checkboxes=[
  {
    name:'checkbox-1',
    key:'checkBox1',
    label:'Government'
  },
  {
    name:'checkbox-2',
    key:'checkBox2',
    label:'Private'
  }
];

  return(
    <div>
       <h4 className="text">Coimbatore COVID Beds Availability Status</h4>
      <label className="container">{isChecked.get("checkbox-1")}</label><br/>
      {
        checkboxes.map(item =>(
          <label className="container" key={item.key}>
          
            {item.name}
            <Checkbox name={item.name} checked={isChecked.get(item.name)} onChange={handleChange}/>

          </label>
        ))
      }
    </div>
  );
    }
    export default Checkbox;

*/
/**/

 /*Checkbox() {
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

*/
 
/*

function Checkbox (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
export default Checkbox
*/