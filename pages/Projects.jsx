import { Box } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/home.png" />
      </Head>
      <Box m="10" border="2px solid gray" p="5" align="center">
        Projects
      </Box>
    </>
  );
}
