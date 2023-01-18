import React from 'react';
import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorMode,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/home.png" />
      </Head>
      <Flex align="center" ml="10%" mr="10%" mt="5%" direction="column">
        <Heading as="h1" size="xl" mb="5">
          Interested in contacting me ?
        </Heading>
        <Text size="md">
          Feel free to get in touch in one of these platforms !
        </Text>
        <Image
          boxSize="400px"
          alt="illustration of a guy coding"
          src={
            colorMode === 'light' ? 'ContactMeLight.png' : 'ContactMeDark.png'
          }
        />
      </Flex>
      <Flex justify="center" align="center" gap={10} m="0 40% 0 40%">
        <Box>
          <Link href="https://www.facebook.com/TSWLevius/" target="_blank">
            <Icon
              as={BsFacebook}
              boxSize={8}
              _hover={{ transform: 'scale(1.3)', cursor: 'pointer' }}
              transition="0.3s"
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://twitter.com/AyoubSenhaji10/" target="_blank">
            <Icon
              as={BsTwitter}
              boxSize={8}
              _hover={{ transform: 'scale(1.3)', cursor: 'pointer' }}
              transition="0.3s"
            />
          </Link>
        </Box>
        <Box>
          <Link
            href="https://www.linkedin.com/in/ayoub-senhaji/"
            target="_blank"
          >
            <Icon
              as={BsLinkedin}
              boxSize={8}
              _hover={{ transform: 'scale(1.3)', cursor: 'pointer' }}
              transition="0.3s"
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
}
