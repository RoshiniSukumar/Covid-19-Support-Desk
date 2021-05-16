import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Sidepan() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        label="Government"
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
       
       
    </div>
  );
}
