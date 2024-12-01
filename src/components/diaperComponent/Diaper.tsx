import React from 'react';

interface DiaperProps {
  value: string;
  onChange: (value: string) => void;
}

const Diaper: React.FC<DiaperProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3>Registro de Fralda</h3>
      <input
        type="text"
        value={value}
        placeholder="Descrição da troca de fralda"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Diaper;
