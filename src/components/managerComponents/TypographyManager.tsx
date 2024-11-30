import React from 'react';
import TypographyComponent from '../typographyComponent/TypographyComponent';

const TypographyManager: React.FC = () => {
  return (
    <div>
      <h2>Gerenciamento de Typography</h2>
      <TypographyComponent text="Título H1" variant="h1" color="blue" />
      <TypographyComponent text="Subtítulo H2" variant="h2" color="green" />
      <TypographyComponent text="Texto padrão" variant="body1" />
    </div>
  );
};

export default TypographyManager;
