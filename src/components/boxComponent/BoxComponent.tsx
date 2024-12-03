import React from "react";
import { Box } from "@mui/material";
import { BoxProps } from "../../interfaces/interface";

const BoxComponent: React.FC<BoxProps> = ({ children }) => {
  return (
    <Box sx={{ padding: 2, border: "2px solid gray", borderRadius: 2, marginBottom: 2 }}>
      {children}
    </Box>
  );
};

export default BoxComponent;