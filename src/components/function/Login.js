import React from "react";
import { Formik, useFormik } from "formik";
import './Login.css'
 

const initialValues = {
  email: "",      
  password: "",
   
};
const validate = (values) => {
  let error = {};
 
  if (!values.email) {
    error.email = "* Required Field";
  }
  if (!values.pass) {
    error.pass = "* Required Field";
  }
  return error;
};

function Login(props) {
  
  const onSubmit = async (values) => {
    values.add = {
      email: values.email,
      password: values.password,
    };

    console.log(values.add)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  
  return (
     <div className="cont">
       <div className="user-signin">
         <div className="imgbx"><img src=""></img></div>
         <div className="formbx"></div>
    <form  onSubmit={formik.handleSubmit}>
      <body >
      <h3>Sign In</h3>
      
        
          <label className='dest' forhtml="email" >Email:
          </label>{" "}
               {" "}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="box-log"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div  className='required'> {formik.errors.email} </div>
        ) : null}{" "}
              {" "}
      <br></br>

       
          <label className='dest' forhtml="pass" >
            Password:
          </label>{" "}
        {" "}
        <input
          type="password"
          name="pass"
          placeholder="Your Password"
          className="box-log"
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div  className='required'> {formik.errors.pass} </div>
        ) : null}{" "}
        
       {" "}
      <br></br>

      
      <button  type="submit" className='login-submit'>
        {" "}
        Login{" "}
      </button>{" "}
      <p className="signup">Don't have an account? <a href="#">Sign-Up</a></p>
       
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
 