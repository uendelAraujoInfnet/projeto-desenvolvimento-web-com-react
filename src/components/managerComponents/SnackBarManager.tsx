import React, { useState } from 'react';
import SnackBarComponent from '../SnackBarComponent';

const SnackBarManager: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleShowSnackBar = () => {
    setOpen(true);
  };

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>Gerenciamento de SnackBar</h2>
      <button style={{width: 500, height: 50, color: 'white', backgroundColor:'#51425f' }} onClick={handleShowSnackBar}>Mostrar SnackBar</button>
      <SnackBarComponent open={open} message="SnackBar Exibido!" onClose={handleCloseSnackBar} />
    </div>
  );
};

export default SnackBarManager;