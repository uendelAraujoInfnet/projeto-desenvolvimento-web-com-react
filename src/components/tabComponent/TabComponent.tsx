import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabProps } from '../../interfaces/interface';

const TabComponent: React.FC<TabProps> = ({ value, onChange }) => {
  return (
    <Tabs value={value} onChange={onChange}>
      <Tab label="Aba 1" style={{color: 'red', fontSize: 18, backgroundColor: 'black', fontWeight: 'bold'}}/>
      <Tab label="Aba 2" style={{color: 'yellow', fontSize: 18, backgroundColor: 'black', fontWeight: 'bold'}}/>
      <Tab label="Aba 3" style={{color: '#78b3a4', fontSize: 18, backgroundColor: 'black', fontWeight: 'bold'}}/>
    </Tabs>
  );
};

export default TabComponent;