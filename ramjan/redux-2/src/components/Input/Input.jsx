import { TextField } from '@mui/material';
import React from 'react';
function Input({ handleInputChange, label, helperText, name, multiline }) {
  return (
      <>
      <TextField
              label={label}
              fullWidth
              required
              helperText='Please Add Title'
              onChange={handleInputChange}
              name={name} 
        />
      
      </>
  )
}

export default Input