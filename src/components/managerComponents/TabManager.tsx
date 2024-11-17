import React, { useState } from 'react';
import TabComponent from '../TabComponent';

const TabManager: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>Gerenciamento de Tabs</h2>
      <TabComponent value={value} onChange={handleTabChange} />
      <p style={{fontSize: 18}}>Conteúdo da Aba {value + 1}</p>
    </div>
  );
};

export default TabManager;
