import React from "react";
import { Avatar } from "@mui/material";
import { AvatarProps } from "../interfaces/interface";

const AvatarComponent: React.FC<AvatarProps> = ({ name }) => {
  return (
    <Avatar sx={{textAlign:"center", width: 150, height: 150, bgcolor: 'primary.main', color: 'white' }}>
      {name.toUpperCase()}
    </Avatar>
  );
};

export default AvatarComponent;