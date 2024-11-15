import React from "react";
import { Alert } from "@mui/material";
import { ALertProps } from "../interfaces/interface";

const AlertComponent: React.FC<ALertProps> = ({ message, severity}) => {
  return (
    <Alert severity={severity}>{message}</Alert>
  );
};

export default AlertComponent;