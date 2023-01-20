import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  useColorMode,
  Button,
  Image,
  Icon,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { useState } from 'react';
import React from 'react';

export default function MainPage() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState('A Front-End Developer');

  return (
    <>
      <Box>
        <Heading
          as="h1"
          size="lg"
          style={
            colorMode === 'light' ? { color: '#D95F5F' } : { color: '#D98575' }
          }
        >
          <code> Hello there !</code>
        </Heading>
        <br />
        <Heading as="h1" size="lg">
          <code>
            <Highlight
              query="Ayoub Senhaji Hamim"
              styles={
                colorMode === 'light'
                  ? { bg: '#D95F5F', color: 'whiteAlpha.800', px: '1' }
                  : { bg: '#D98575', color: 'gray.800', px: '1' }
              }
            >
              I&lsquo;m Ayoub Senhaji Hamim !
            </Highlight>
          </code>
        </Heading>
        <br />
        <Text
          fontSize="2xl"
          onClick={() => {
            setTitle(`A Front-End Developer, A GOOD ONE I PROMISE!`);
          }}
        >
          <code> {title}</code>
        </Text>
        <br />
        <Flex gap={5}>
          <Button
            onClick={() => router.push('/About')}
            bg={colorMode === 'light' ? '#D95F5F' : '#D98575'}
            _hover={
              colorMode === 'light' ? { bg: '#D98575' } : { bg: '#D95F5F' }
            }
            color={colorMode === 'light' ? '#FFF' : '#000'}
          >
            About me &nbsp; ➤
          </Button>
          <Link href="https://github.com/AyoubSen/" target="_blank">
            <Icon
              as={BsGithub}
              boxSize="10"
              _hover={{ transform: 'scale(1.3)', cursor: 'pointer' }}
              transition="0.3s"
            />
          </Link>
        </Flex>
      </Box>
      <Box>
        <Image
          boxSize={{ base: '500px', md: '500px', lg: '500px', sm: '100%' }}
          alt="illustration of a guy coding"
          src={
            colorMode === 'light' ? 'codingOrange.png' : 'codingDarkMode.png'
          }
        />
      </Box>
    </>
  );
}
