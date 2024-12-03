import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardProps } from "../../interfaces/interface";

const CardComponent: React.FC<CardProps> = ({ title, description, children}) => {

  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {children && <div>{children}</div>}
      </CardContent>
    </Card>
  );
};

export default CardComponent;