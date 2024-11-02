import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
    label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
    return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
