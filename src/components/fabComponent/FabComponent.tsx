import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FabProps } from '../interfaces/interface';

const FabComponent: React.FC<FabProps> = ({ onClick }) => {
  return (
    <Fab color="primary" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};

export default FabComponent;
