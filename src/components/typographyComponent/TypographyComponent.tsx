import React from 'react';
import Typography from '@mui/material/Typography';
import { TypographyProps } from '../../interfaces/interface';

const TypographyComponent: React.FC<TypographyProps> = ({ text, variant = 'body1', color = 'black' }) => {
  return (
    <Typography variant={variant} sx={{ color }}>
      {text}
    </Typography>
  );
};

export default TypographyComponent;