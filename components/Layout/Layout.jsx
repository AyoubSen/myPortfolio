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
        <main>{children}</main>
        <Flex
          bg={colorMode === 'light' ? '#D95F5F' : '#D98575'}
          color="#FFF"
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
