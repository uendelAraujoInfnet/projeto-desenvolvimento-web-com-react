import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from '../interfaces/interface';
import { useNavigate } from 'react-router-dom';

const CustomButton: React.FC<CustomButtonProps> = ({ label, navigateTo }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };

    return <Button variant="contained" onClick={handleClick}>{label}</Button>;
};

export default CustomButton;
