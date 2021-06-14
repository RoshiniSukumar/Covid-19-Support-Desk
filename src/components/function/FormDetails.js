import React from "react";
import { Formik, useFormik } from "formik";
import './FormDetails.css'

const  initialValues={
         
        hospitaltype:"",
        hospitalname:"",
        address:"",
        contactnumber:"",
        normalbed:"",
        icubed:"",
        o2bed:"",
        total:""
    };

    const validate = (values) => {
      let error = {};
     
      if (!values.hospitaltype) {
        error.hospitaltype = "* Required Field";
      }
      if (!values.hospitalname ) {
        error.hospitalname  = "* Required Field";
      }
      if (!values.address ) {
        error.address  = "* Required Field";
      }
      if (!values.contactnumber) {
        error.contactnumber  = "* Required Field";
      }
      if (!values.normalbed ) {
        error.normalbed  = "* Required Field";
      }
      if (!values.icubed ) {
        error.icubed = "* Required Field";
      }
      if (!values.o2bed ) {
        error.o2bed = "* Required Field";
      }
      if (!values. total) {
        error.total = "* Required Field";
      }
      return error;
    };

     
        function FormDetails(props) {
  
        const onSubmit = async (values) => {
            values.add = {
              hospitaltype: values.hospitaltype,
              hospitalname: values.hospitalname,
              address:values.address,
              contactnumber:values.contactnumber,
              normalbed:values.normalbed,
              icubed:values.icubed,
              o2bed:values.o2bed,
              total:values.total
            };
        
            console.log(values.add)
          };
        
          const formik = useFormik({
            initialValues,
            onSubmit,
            validate
          });

return (
   <div className="cont2">
     <div className="user-signin2">
    <form  className="formbx2" onSubmit={formik.handleSubmit}>
      <h3 className="formhead2">Hospital Details</h3> 
         <label className='lb2' forhtml="hospitaltype" >Hospital Type:
          </label>{" "}
               {" "}
               <br/>
               &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type= " "
          name= "hospitaltype"
          placeholder="Enter Hospital type as CCC/CHO/CHC/ICCC"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.hospitaltype}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.hospitaltype && formik.errors.hospitaltype ? (
          <div  className='required2'>&emsp;&emsp;&emsp;&emsp;&emsp; {formik.errors.hospitaltype} </div>
        ) : null}{" "}
              {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml="hospitalname" >
      Hospital Name:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name= "hospitalname" 
          placeholder=" Enter Hospital Name"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.hospitalname}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched. hospitalname  && formik.errors.hospitalname ? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.hospitalname } </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "address" >
       Address:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name=  "address" 
          placeholder=" Enter Hospital Address"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.address }
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.address  && formik.errors.address ? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.address } </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "contactnumber" >
        Contact Number:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type="number "
          name=   "contactnumber"
          placeholder=" Enter Hospital Contact Number"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.contactnumber}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.contactnumber  && formik.errors.contactnumber? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.contactnumber } </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "normalbed" >
         Normal :
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name=  "normalbed"  
          placeholder=" Enter Normal beds count as Vacancy/Total"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.normalbed}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.normalbed  && formik.errors.normalbed? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.normalbed } </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "icubed" >
         ICU :
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name=  "icubed" 
          placeholder=" Enter  ICU beds count as Vacancy/Total"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.icubed }
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.icubed  && formik.errors.icubed? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.icubed } </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "o2bed" >
         Oxygen:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name=  "o2bed" 
          placeholder=" Enter Oxygen beds count as Vacancy/Total"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.o2bed }
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.o2bed  && formik.errors.o2bed? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.o2bed} </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <label className="lb2"  forhtml= "total" >
         Total:
          </label>{" "}
        {" "}
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type=" "
          name=  "total" 
          placeholder=" Enter total bed count as Vacancy/Total"
          className="ip2"
          onChange={formik.handleChange}
          value={formik.values.total}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.total  && formik.errors.total? (
          <div  className='required2'>&emsp; &emsp;&emsp;&emsp;&emsp;{formik.errors.total} </div>
        ) : null}{" "}
        
       {" "}
      <br/><br/><br/>

      <button  type="submit" className='loginbtn2' onClick={formik.handleSubmit}  >
        {" "}
        Submit{" "}
      </button>{" "} 
    </form>
    </div>
    </div>

);
}

export default FormDetails;
