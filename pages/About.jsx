import React from 'react';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/home.png" />
      </Head>
      <Box m="10" border="2px solid gray" p="5" align="center">
        About
      </Box>
    </>
  );
}
