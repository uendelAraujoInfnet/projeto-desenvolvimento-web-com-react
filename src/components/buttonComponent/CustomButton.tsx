import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from '../../interfaces/interface';
import { useNavigate } from 'react-router-dom';

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, style, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else if (navigateTo) {
      navigate(navigateTo); 
    }
  };

  return (
    <Button variant="contained" onClick={handleClick} style={style}>
      {label}
    </Button>
  );
};

export default CustomButton;
