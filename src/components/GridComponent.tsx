import React from 'react';
import Grid from '@mui/material/Grid';

const GridComponent: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        Item 1
      </Grid>
      <Grid item xs={6}>
        Item 2
      </Grid>
      <Grid item xs={12}>
        Item 3
      </Grid>
    </Grid>
  );
};

export default GridComponent;
