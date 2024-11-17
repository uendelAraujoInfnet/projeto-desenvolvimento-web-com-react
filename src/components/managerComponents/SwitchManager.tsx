import React, { useState } from 'react';
import SwitchComponent from '../SwitchComponent';
import Typography from '@mui/material/Typography';

const SwitchManager: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const changeColorOn = () => {
    {<p style={{backgroundColor: '#5d9e7e', color: '#2b2318', fontWeight: 'bold', fontSize: 20}}>Ligado</p>}
  }

  const changeColorOff = () => {
    {<p style={{backgroundColor: '#ba3259', color: '#2e1e45', fontWeight: 'bold', fontSize: 20}}>Desligado</p>}
  }

  return (
    <div>
      <h2>Gerenciamento de Switch</h2>
      <SwitchComponent checked={isChecked} onChange={handleSwitchChange} />
      <Typography
        sx={{
          color: isChecked ? 'green' : 'red',
          fontWeight: 'bold',
          fontSize: 20,
          border: '1px solid',
          padding: 2,
          borderRadius: 10,
        }}
      >
       Status: {isChecked ? 'Ligado' : 'Desligado'}
      </Typography>
    </div>
  );
};

export default SwitchManager;
