import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext';
import { makeServer } from '@/services/mirage';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@/services/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
