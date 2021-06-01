import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function Formikcontain () {
   
  const checkboxOptions = [
    { key: 'Option 1', value: 'CHC' },
    { key: 'Option 2', value: 'CCC' },
    { key: 'Option 3', value: 'CHO' }
  ]
  const initialValues = {
    
    checkboxOption: []
     
  }
  const validationSchema = Yup.object({
     
    checkboxOption: Yup.array().required('Required')
     
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={onSubmit}
          <FormikControl
            control='checkbox'
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
          />
           
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default Formikcontain