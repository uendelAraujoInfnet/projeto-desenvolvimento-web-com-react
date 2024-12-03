import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { SnackBarProps } from '../../interfaces/interface';

const SnackBarComponent: React.FC<SnackBarProps> = ({ open, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      message={message}
      key="snackbar"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
};

export default SnackBarComponent;