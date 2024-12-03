import React from 'react';
import Container from '@mui/material/Container';
import { ContainerProps } from '../../interfaces/interface';

const ContainerComponent: React.FC<ContainerProps> = ({children }) => {
  return(
    <Container> {children} </Container>
  );
};

export default ContainerComponent;