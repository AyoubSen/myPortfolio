import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/Layout/Layout';
import theme from '@/theme';
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
