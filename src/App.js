import React from 'react';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import './App.css';
import Routes from './routes/Index';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

// export default App;
