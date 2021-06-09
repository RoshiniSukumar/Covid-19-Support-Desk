import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

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

    const validate  = Yup.object({
          hospitaltype:Yup.string().required('*Required'),
          hospitalname: Yup.string().required('*Required').label("Name of Hospital/Centre"),
          address: Yup.string().required('*Required').label("Address"),
          contactnumber:Yup.number().required('*Required').label("Contact Number"),
          normalbed: Yup.string().required('*Required').label("Normal Beds"),
          icubed:Yup.string().required('*Required').label("ICU Beds"),
          o2bed: Yup.string().required('*Required').label("Oxygen Beds"),
          total: Yup.string().required('*Required').label("Total"),
            
        
        });

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
    <form  className="formbx" onSubmit={formik.handleSubmit}>
         <label className='lb' forhtml="hospitaltype" >Hospital Type:
          </label>{" "}
               {" "}
               <br/>
               &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          type= "hospitaltype"
          name= "hospitaltype"
          placeholder="Enter Hospital type as CCC/CHO/CHC/ICCC"
          className="ip"
          onChange={formik.handleChange}
          value={formik.values.hospitaltype}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched. hospitaltype && formik.errors. hospitaltype ? (
          <div  className='required'>v&emsp;&emsp;&emsp;&emsp;&emsp; {formik.errors. hospitaltype} </div>
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
    </form>

);
}

export default FormDetails;
