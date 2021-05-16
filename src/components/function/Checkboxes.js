import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Checkboxes.css'
 
export default function CheckboxLabels() {
  const [state, setState] = React.useState({
     
    checkedB: true,
    checkedC: true
     
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      
      <FormControlLabel className="label"
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="Government"
          />
        }
        label="Government"/>
        
        
        <FormControlLabel className="label"
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="Private"
          />
        }
        label="Private"
      />
       
       
       
       </FormGroup>
  );
}
