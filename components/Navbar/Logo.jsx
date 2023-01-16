import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export default function Logo() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [transform, setTransform] = useState('');
  const [transition, setTransition] = useState('');

  const handleMouseOver = () => {
    setTransform('rotate(-20deg)');
    setTransition('0.5s');
  };
  const handleMouseOut = () => {
    setTransform('rotate(0deg)');
    setTransition('0.5s');
  };

  return (
    <Box p="5" ml="10">
      <Heading
        fontWeight="bold"
        color={colorMode === 'light' ? '#D95F5F' : '#D98575'}
        size="lg"
        style={{ transform, transition }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link href="/">A.S.H</Link>
      </Heading>
    </Box>
  );
}
