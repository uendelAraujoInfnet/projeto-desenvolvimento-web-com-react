import React, { useState } from 'react';
import TextFieldComponent from '../TextFieldComponent';

const TextFieldManager: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Gerenciamento de TextField</h2>
      <TextFieldComponent
        label="Digite algo"
        value={text}
        onChange={handleTextChange}
      />
      <p style={{fontSize: 20}}>Texto digitado: {text}</p>
    </div>
  );
};

export default TextFieldManager;
