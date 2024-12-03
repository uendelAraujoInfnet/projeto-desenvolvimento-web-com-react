import React from 'react';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '../../interfaces/interface';

const TextFieldComponent: React.FC<TextFieldProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
    />
  );
};

export default TextFieldComponent;