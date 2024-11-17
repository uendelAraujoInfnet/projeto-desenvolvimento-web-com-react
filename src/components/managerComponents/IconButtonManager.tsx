import React from "react";
import IconButtonComponent from "../IconButtonComponent";

const IconButtonManager: React.FC = () => {

  const handleDeleteClick = () => {
    alert('IconButton clicado!');
  };

  return (
    <div>
      <h2>Gerenciamento de IconButton</h2>
      <IconButtonComponent onClick={handleDeleteClick} />
    </div>
  );

};

export default IconButtonManager;