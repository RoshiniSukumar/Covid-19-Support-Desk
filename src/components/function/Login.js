import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import './Login.css'
 
 function Login() {
   
   const initialValues={
     email:'',
     password:''
   }
   
   const ValidationSchema = Yup.object({
     email:Yup.string().email('Invalid email format').required('*Required'),
     password:Yup.string().required('*Required')
   })
   
   const onSubmit = values => {
     console.log('Form data',values)
   }
   return (
          

       <Formik initialValues={initialValues} ValidationSchema={ValidationSchema} onSubmit={onSubmit}>
         {
           formik => {
             return <Form className="loginform">
               <h2 className="loginhead">Login to Update Beds</h2>
               <FormikControl
               control='input'
               type='email'
               label='Email'
               name='email'/>
               <FormikControl
               control='input'
               type='password'
               label='Password'
               name='password'/>
               <button className="login" type='submit' disabled={!formik.isValid}>Login</button>
             </Form>
           }
         }
       </Formik>
     
   )
 }
 
 export default Login
 