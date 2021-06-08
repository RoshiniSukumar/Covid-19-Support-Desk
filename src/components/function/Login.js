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
  if (!values.password) {
    error.password = "* Required Field";
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
         <div className="imgbx"><img className="img4" src="./images/image4.jpeg"></img></div>
          
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
          <div  className='required'>v&emsp;&emsp;&emsp;&emsp;&emsp; {formik.errors.email} </div>
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
          name="pass"
          placeholder="Your Password"
          className="ip"
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div  className='required'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.pass} </div>
        ) : null}{" "}
        
       {" "}
      <br></br>

      
      <button  type="submit" className='loginbtn'>
        {" "}
        Login{" "}
      </button>{" "}
      <p className="signup">Don't have an account? <a href="#">Sign-Up</a></p>
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
 