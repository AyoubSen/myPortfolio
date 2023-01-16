import React from 'react';
import NavElement from './NavElement';
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MoonIcon } from '@chakra-ui/icons';
import { SunIcon } from '@chakra-ui/icons';
import Logo from './Logo';
import styled from '@emotion/styled';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        justify="space-between"
        // border="2px solid gray"
        minWidth="max-content"
        align="center"
        borderBottom="2px solid gray"
        // m="5"
      >
        <Logo />
        <Flex align="center" w="30%" justify="space-evenly">
          <NavElement title="About" />
          <NavElement title="Projects" />
          <NavElement title="Contact" />
        </Flex>
        <Box p="5">
          <Button
            mr="10"
            transitionProperty="background-color"
            transitionDuration="normal"
            onClick={toggleColorMode}
            bg="transparent"
            _hover={
              colorMode === 'light' ? { background: '#BCBEC0' } : undefined
            }
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Flex>
    </>
  );
}
