import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import Cookies from 'universal-cookie';
 
import './Login.css'
 

const cookies = new Cookies();

const initialValues = {
  email: "",      
  password: "",
   
};
const validate = (values) => {
  let error = {};
 
  if (!values.email) {
    error.email = "* Required Field";
  }
  if (!values.password) {
    error.password = "* Required Field";
  }
  return error;
};

function Login(props) {
  const [login, setlogin] = useState("")
  const [hpname,sethpname] = useState("") 
  var sign=false
  
  const onSubmit = async (values) => {


    values.add = {
      email: values.email,
      password: values.password,
    };
  var signin = await axios.post("http://localhost:2000/login",values.add)
  let sign = signin.data.err
  console.log(sign)
  
  if(sign==null){
    console.log("Login successfully!")
    
    cookies.set('Hppname',signin.data.hospitalname);
    // sethpname(Login.data.hospitalname)
    // console.log(hpname)
    signbt() 
    alert('Login Successfully!')
    console.log(values.add)
  }
    
    console.log(signin)
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
      
     <div className="cont">
       <div className="user-signin">
         <div className="imgbx"><img className="img4" src="./images/img4.jpg"></img></div>
          
    <form  className="formbx" onSubmit={formik.handleSubmit}>
      <body  >
      <div className="formin">
      <h3 className="formhead">Sign In</h3>

        
          <label className='lb' forhtml="email" >Email:
          </label>{" "}
               {" "}
               <br/>
               &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type="email"
          name="email"
          placeholder="Hospital's Email"
          className="ip"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div  className='required'>&emsp;&emsp;&emsp;&emsp;&emsp; {formik.errors.email} </div>
        ) : null}{" "}
              {" "}
      <br></br>

       
          <label className="lb"  forhtml="pass" >
            Password:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          className="ip"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.password && formik.errors.password ? (
          <div  className='required'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.password} </div>
        ) : null}{" "}
        
       {" "}
      <br></br>

      
     <button  type="submit" className='loginbtn' onClick={formik.handleSubmit}  >
        {" "}
        Login{" "}
      </button>{" "} 
      <p className="signup">Don't have an account? <a href="/register">Sign-Up</a></p>
      </div>
    </body>
    </form>
    </div>
    </div>
     
  );
}

export default Login;


// import React from 'react'
// import { Formik, Form} from 'formik'
// import * as Yup from 'yup'
// import FormikControl from './FormikControl'
// import './Login.css'
 
//  function Login() {
   
//    const initialValues={
//      email:'',
//      password:''
//    }
   
//    const ValidationSchema = Yup.object({
//      email:Yup.string().email('Invalid email format').required('*Required'),
//      password:Yup.string().required('*Required')
//    })
   
//    const onSubmit = values => {
//      console.log('Form data',values)
//    }
//    return (
          

//        <Formik initialValues={initialValues} ValidationSchema={ValidationSchema} onSubmit={onSubmit}>
//          {
//            formik => {
//              return <Form className="loginform">
//                <h2 className="loginhead">Login to Update Beds</h2>
//                <FormikControl
//                control='input'
//                type='email'
//                label='Email'
//                name='email'
//                 />
//                <FormikControl
//                control='input'
//                type='password'
//                label='Password'
//                   name='password'
//                />
//                <button className="login" type='submit' disabled={!formik.isValid}>Login</button>
//              </Form>
//            }
//          }
//        </Formik>
     
//    )
//  }
 
//  export default Login
 