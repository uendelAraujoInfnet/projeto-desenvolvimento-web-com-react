import React from 'react';
import FabComponent from '../FabComponent';

const FabManager: React.FC = () => {
  const handleFabClick = () => {
    alert('Fab Button Clicked!');
  };

  return (
    <div>
      <h2>Gerenciamento de Fab</h2>
      <FabComponent onClick={handleFabClick} />
    </div>
  );
};

export default FabManager;
