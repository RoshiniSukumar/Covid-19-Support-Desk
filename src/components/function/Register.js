import React from 'react'
import {Formik,useFormik} from "formik";
 
import './Register.css'
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
 

const initialValues = {
  email:"",
  password:"",
  confirmpassword:""
};
const validate = (values) => {
  let error = {};
 
  if (!values.email) {
    error.email = "* Required Field";
  }
  if (!values.password) {
    error.password = "* Required Field";
  }
  // if ("values.password "!= values.confirmpassword){
  //   error.confirmpassword = "* Passwords must match!";
  //   // elif(!values.confirmpassword)
  //   //   error.confirmpassword = "* RequiredField";
    
  // }
  if(values.password && values.confirmpassword){
    if(values.password !== values.confirmpassword)
    error.confirmpassword = "* Passwords must match!"
  }
  return error;
};

  

// constValidateConfirmPassword = (password,values) =>{
//   let error="";
//   if(password && values){
//     if(password!== values)
//     error = "* Passwords must match!"
//   }
// }
// return error;
// };


function Register(props){
  
  var sign=false

   

  const onSubmit = async (values) => {
    //  props.set(true)
      
    
    values.add =await {


      email: values.email,
      password: values.password,
      confirmpassword:values.confirmpassword

    };
    // console.log(values.add)
    axios.post("http://localhost:2000/register",values.add);

    // if (sign == true)  {
    //   console.log(sign)
    //   return <Redirect to={"/register/details"}/>
    // }
     signbt() 

    // console.log(values.add)
      
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  
    var signbt=()=>{
    
    props.set(true)
  }
  return (
    
    <div className="cont1">
      
      <div className="user-signin1">
        
   <form  className="formbx1" onSubmit={formik.handleSubmit}>
     <body  >
     <div className="formin1">
     <h3 className="formhead1">Create an Account</h3>

       
         <label className='lb1' forhtml="email" >Email:
         </label>{" "}
              {" "}
              <br/>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
       <input
         type="email"
         name="email"
         placeholder="Hospital's Email"
         className="ip1"
         onChange={formik.handleChange}
         value={formik.values.email}
         onBlur={formik.handleBlur}
       />{" "}
       {formik.touched.email && formik.errors.email ? (
         <div  className='required1'>&emsp;&emsp;&emsp;&emsp;&emsp; {formik.errors.email} </div>
       ) : null}{" "}
             {" "}
     <br></br>

      
         <label className="lb1"  forhtml="password" >
           Password:
         </label>{" "}
       {" "}
       <br/>
       &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
       <input
         type="password"
         name="password"
         placeholder="Create Password"
         className="ip1"
         onChange={formik.handleChange}
         value={formik.values.password}
         onBlur={formik.handleBlur}
       />{" "}
       {formik.touched.password && formik.errors.password ? (
         <div  className='required1'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.password} </div>
       ) : null}{" "}
       
      {" "}
     <br></br>

     <label className="lb1"  forhtml="confirmpassword" >
           Confirm Password:
         </label>{" "}
       {" "}
       <br/>
       &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
       <input
         type="password"
         name="confirmpassword"
         placeholder="Confirm Password"
         className="ip1"
         onChange={formik.handleChange}
         value={formik.values.confirmpassword}
         onBlur={formik.handleBlur}
       />{" "}
       {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
         <div  className='required1'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.confirmpassword} </div>
       ) : null}{" "}
       
      {" "}
     <br></br>

     {/* <button  type="submit" className='loginbtn1'  onClick={formik.handleSubmit } >
       {" "}
       Sign-up {" "}
     </button>{" "} */}
     <button  type="submit" className='loginbtn1'  onClick={formik.handleSubmit} >
       {" "}
       Sign-Up {" "}
     </button>{" "}
     <p className="signup1">Already have an account? <a href="/login">Sign-In</a></p>
     </div>
   </body>
   </form>
   <div className="imgbx1"><img className="img5" src="./images/img5.jpg"></img></div>
   
   </div>
   </div>
  );
       }

export default Register;


// import { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import './Register.css'
 

// export default function Register() {
   
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     confirmpassword:"",
//     hospitaltype:"",
//     hospitalname:"",
//     address:"",
//     contactnumber:"",
//     normalbed:"",
//     icubed:"",
//     o2bed:"",
//     total:""

//   });
//   const [currentStep, setCurrentStep] = useState(0);
//   const [errors, setErrors] = useState({});

//   const makeRequest = (formData) => {
//     console.log("Form Submitted", formData);
//   };

//   const handleNextStep = (newData, final = false) => {
//     setData((prev) => ({ ...prev, ...newData }));

//     if (final) {
//       makeRequest(newData);
//       return;
//     }

//     setCurrentStep((prev) => prev + 1);
//   };

//   const handlePrevStep = (newData) => {
//     setData((prev) => ({ ...prev, ...newData }));
//     setCurrentStep((prev) => prev - 1);
//   };
   


//   const steps = [
//     <StepOne next={handleNextStep} data={data} errors={errors} />,
//     <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
//   ];

//   console.log("data", data);

//   return <div className="App">{steps[currentStep]}</div>;
// }

// const stepOneValidationSchema = Yup.object({
//   email: Yup.string().email('Invalid email format').required('*Required').label("Email"),
//   password: Yup.string().required('*Required').label("Password"),
//   confirmpassword:Yup.string().oneOf([Yup.ref('password'),''],'*Passwords must match').required('*Required').label("Confirm Password")
// });

// const StepOne = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values);
//   };
//   // props.addDetails(data);
//   // console.log(data);

//   return (
//     <Formik
//       validationSchema={stepOneValidationSchema}
//       initialValues={props.data}
//       onSubmit={handleSubmit}
//     >
//        {({ values }) => (
//         <div className="contain">
//         <Form id="form1">
//           <h3>Create Account</h3>
//           <p className="lbl">Email</p>
//           <Field name="email" />
//           <div className="required">
//           <ErrorMessage name="email" />
           
//           </div>
          
          

//           <p className="lbl">Password</p>
//           <Field name="password" type="password" />
//           <div className="required">
//           <ErrorMessage name="password" /></div>

//           <p className="lbl">Confirm Password</p>
//           <Field name="confirmpassword" type="password"/>
//           <div className="required">
//           <ErrorMessage name="confirmpassword" /></div>
           
//            <div className="btn-box">
//           <button type="submit">Next</button>
//           </div>
//         </Form>
//         </div>
//       )}
//     </Formik>
//   );
// };

// const stepTwoValidationSchema = Yup.object({
//   hospitaltype:Yup.string().required('*Required'),
//   hospitalname: Yup.string().required('*Required').label("Name of Hospital/Centre"),
//   address: Yup.string().required('*Required').label("Address"),
//   contactnumber:Yup.number().required('*Required').label("Contact Number"),
//   normalbed: Yup.string().required('*Required').label("Normal Beds"),
//   icubed:Yup.string().required('*Required').label("ICU Beds"),
//   o2bed: Yup.string().required('*Required').label("Oxygen Beds"),
//   total: Yup.string().required('*Required').label("Total"),
    

// });

// const StepTwo = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values, true);
//   };

//   return (
//     <Formik
//       validationSchema={stepTwoValidationSchema}
//       initialValues={props.data}
//       onSubmit={handleSubmit}
//     >
//       {({ values }) => (
//        <div className="contain1">
//         <Form id="form2">
//           <h3>Centres Details</h3>
//           <p className="lbl">Type of Hospital/Centre</p>
//           <Field name="hospitaltype" />
//           <div className="required">
//           <ErrorMessage name="hospitaltype" /></div>
          
//           <p className="lbl">Name of Hospital/Centre</p>
//           <Field name="hospitalname" />
//           <div className="required">
//           <ErrorMessage name="hospitalname" /></div>

//           <p className="lbl" >Address</p>
//           <Field name="address" />
//           <div className="required">
//           <ErrorMessage name="address" /></div>

//           <p className="lbl" >Contact number</p>
//           <Field name="contactnumber" />
//           <div className="required">
//           <ErrorMessage name="contactnumber" /></div>

//           <p className="lbl">Normal Beds</p>
//           <Field name="normalbed" />
//           <div className="required">
//           <ErrorMessage name="normalbed" /></div>

//           <p className="lbl">ICU Beds</p>
//           <Field name="icubed" />
//           <div className="required">
//           <ErrorMessage name="icubed" /></div>
  
//           <p className="lbl">Oxygen Beds</p>
//           <Field name="o2bed" />
//           <div className="required">
//           <ErrorMessage name="o2bed" /></div>

//           <p className="lbl">Total</p>
//           <Field name="total" />
//           <div className="required">
//           <ErrorMessage name="total" /></div>
          
          
//           <div className="btn-box">
//           <button type="button" onClick={() => props.prev(values)}>
//             Back
//           </button>
//           <button type="submit">Submit</button>
//           </div>
          
//         </Form>
//         </div>
//       )}
//     </Formik>
//   );
// };
