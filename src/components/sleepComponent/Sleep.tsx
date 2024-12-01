import React from 'react';

interface SleepProps {
  value: string;
  onChange: (value: string) => void;
}

const Sleep: React.FC<SleepProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3>Registro de Sono</h3>
      <input
        type="text"
        value={value}
        placeholder="Descrição do tempo de sono (em horas)"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Sleep;
