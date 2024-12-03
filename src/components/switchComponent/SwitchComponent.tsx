import React from 'react';
import Switch from '@mui/material/Switch';
import { SwitchProps } from '../../interfaces/interface';

const SwitchComponent: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return <Switch checked={checked} onChange={onChange} />;
};

export default SwitchComponent;