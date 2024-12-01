import React from 'react';

interface EatProps {
  value: string;
  onChange: (value: string) => void;
}

const Eat: React.FC<EatProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3>Registro de Alimentação</h3>
      <input
        type="text"
        value={value}
        placeholder="Descrição da refeição"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Eat;
