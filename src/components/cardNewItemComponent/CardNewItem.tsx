import React from 'react';

interface CardNewItemProps {
  onCreate: (type: string) => void;
}

const CardNewItem: React.FC<CardNewItemProps> = ({ onCreate }) => {
  return (
    <div>
      <h3>Adicionar Novo Registro</h3>
      <button onClick={() => onCreate('eat')}>Adicionar Alimentação</button>
      <button onClick={() => onCreate('diaper')}>Adicionar Fralda</button>
      <button onClick={() => onCreate('sleep')}>Adicionar Sono</button>
    </div>
  );
};

export default CardNewItem;
