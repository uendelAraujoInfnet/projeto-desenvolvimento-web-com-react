import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButtonProps } from '../../interfaces/interface';

const IconButtonComponent: React.FC<IconButtonProps> = ({ onClick }) => {
  return (
    <IconButton color='primary' onClick={onClick}>
      <DeleteIcon style={{fontSize: '72px', color: 'red', border: '3px solid', borderRadius: '55px'}}/>
    </IconButton>
  );
};

export default IconButtonComponent;