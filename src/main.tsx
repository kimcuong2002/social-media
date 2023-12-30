import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import QueryProvider from './provider/query-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

// eslint-disable-next-line import/order
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryProvider>
        <ToasterConfig />
        {/* <ColorModeScript   initialColorMode={theme.config.initialColorMode} /> */}
        <Routes />
      </QueryProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
