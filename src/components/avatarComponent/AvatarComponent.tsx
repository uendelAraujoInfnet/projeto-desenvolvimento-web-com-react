import React from "react";
import { Avatar } from "@mui/material";
import { AvatarProps } from "../../interfaces/interface";

const AvatarComponent: React.FC<AvatarProps> = ({ name }) => {
  return (
    <Avatar sx={{textAlign:"center", width: 100, height: 100, bgcolor: 'primary.main', color: 'white', fontSize: "14px" }}>
      {name.toUpperCase()}
    </Avatar>
  );
};

export default AvatarComponent;