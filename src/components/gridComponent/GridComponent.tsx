import React from 'react';
import Grid from '@mui/material/Grid';
import { GridProps } from '../../interfaces/interface';

const GridComponent: React.FC<GridProps> = ({children}) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default GridComponent;
