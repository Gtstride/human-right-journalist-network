import { Container as ContainerBox } from '@chakra-ui/react';
import React from 'react';

export default function Container({ children }) {
  return <ContainerBox maxW={'container.xl'}>{children}</ContainerBox>;
}
