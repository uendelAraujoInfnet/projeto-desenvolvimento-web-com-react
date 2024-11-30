import React from "react";
import Checkbox  from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckboxProps } from "../interfaces/interface";

const CheckboxComponent: React.FC<CheckboxProps> = ({ label, checked, onChange}) => {
  return(
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};

export default CheckboxComponent;