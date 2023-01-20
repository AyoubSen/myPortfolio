import React from 'react';
import { Grid, Flex, useColorMode } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const { asPath } = useRouter();

  return (
    <motion.div
      key={asPath}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Grid h="100vh" templateRows="70px auto 50px">
        <Navbar />

        <Flex
          m={{
            xl: '0',
            lg: '0 20% 0 20%',
            md: '0 10% 0 10%',
            sm: '0',
          }}
          fontWeight="bold"
          justify={{
            xl: 'space-around',
            lg: 'space-around',
            md: 'center',
            sm: 'space-between',
          }}
          maxH="80%"
          align="center"
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          {children}
        </Flex>

        <Flex
          bg={colorMode === 'light' ? '#D95F5F' : '#D98575'}
          color={colorMode === 'light' ? 'whiteAlpha.800' : 'gray.800'}
          justify="center"
          align="center"
          fontWeight="bold"
        >
          Ayoub Senhaji Hamim @2023
        </Flex>
      </Grid>
    </motion.div>
  );
}
