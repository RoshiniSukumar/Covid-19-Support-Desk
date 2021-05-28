import React from 'react'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Update.css'
 

export default function App() {
   
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword:"",
    hospitaltype:"",
    hospitalname:"",
    address:"",
    contactnumber:"",
    normalbed:"",
    icubed:"",
    o2bed:"",
    total:""

  });
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
   


  const steps = [
    <StepOne next={handleNextStep} data={data} errors={errors} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
  ];

  console.log("data", data);

  return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('*Required').label("Email"),
  password: Yup.string().required('*Required').label("Password"),
  confirmpassword:Yup.string().oneOf([Yup.ref('password'),''],'*Passwords must match').required('*Required').label("Confirm Password")
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
       {({ values }) => (
        <div className="contain">
        <Form id="form1">
          <h3>Create Account</h3>
          <p className="lbl">Email</p>
          <Field name="email" />
          <div className="required">
          <ErrorMessage name="email"  />
          </div>
          
          

          <p className="lbl">Password</p>
          <Field name="password" type="password" />
          <div className="required">
          <ErrorMessage name="password" /></div>

          <p className="lbl">Confirm Password</p>
          <Field name="confirmpassword" type="password"/>
          <div className="required">
          <ErrorMessage name="confirmpassword" /></div>
           
           <div className="btn-box">
          <button type="submit">Next</button>
          </div>
        </Form>
        </div>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  hospitaltype:Yup.string().required('*Required'),
  hospitalname: Yup.string().required('*Required').label("Name of Hospital/Centre"),
  address: Yup.string().required('*Required').label("Address"),
  contactnumber:Yup.number().required('*Required').label("Contact Number"),
  normalbed: Yup.number().required('*Required').label("Normal Beds"),
  icubed:Yup.number().required('*Required').label("ICU Beds"),
  o2bed: Yup.number().required('*Required').label("Oxygen Beds"),
  total: Yup.number().required('*Required').label("Total"),
    

});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
       <div className="contain1">
        <Form id="form2">
          <h3>Centres Details</h3>
          <p className="lbl">Type of Hospital/Centre</p>
          <Field name="hospitaltype" />
          <div className="required">
          <ErrorMessage name="hospitaltype" /></div>
          
          <p className="lbl">Name of Hospital/Centre</p>
          <Field name="hospitalname" />
          <div className="required">
          <ErrorMessage name="hospitalname" /></div>

          <p className="lbl" >Address</p>
          <Field name="address" />
          <div className="required">
          <ErrorMessage name="address" /></div>

          <p className="lbl">Normal Beds</p>
          <Field name="normalbed" />
          <div className="required">
          <ErrorMessage name="normalbed" /></div>

          <p className="lbl">ICU Beds</p>
          <Field name="icubed" />
          <div className="required">
          <ErrorMessage name="icubed" /></div>
  
          <p className="lbl">Oxygen Beds</p>
          <Field name="o2bed" />
          <div className="required">
          <ErrorMessage name="o2bed" /></div>

          <p className="lbl">Total</p>
          <Field name="total" />
          <div className="required">
          <ErrorMessage name="total" /></div>
          
          
          <div className="btn-box">
          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
          </div>
          
        </Form>
        </div>
      )}
    </Formik>
  );
};
