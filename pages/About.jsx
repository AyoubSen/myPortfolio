import React from 'react';
import Head from 'next/head';
import {
  Box,
  Image,
  useColorMode,
  Spacer,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  Grid,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/home.png" />
      </Head>
      <Grid align="center" ml="20%" mr="20%" mt="5%">
        <Box mb="20">
          <Image
            boxSize="250px"
            alt="a picture of myself"
            src="myPic.jpg"
            borderRadius="50%"
            border="4px solid"
            borderColor={colorMode === 'light' ? '#D95F5F' : '#D98575'}
          />
        </Box>
        <Accordion
          defaultIndex={[0]}
          borderRadius="20px"
          overflow="hidden"
          fontWeight="bold"
          textAlign="left"
          color={colorMode === 'light' ? 'whiteAlpha.800' : 'gray.800'}
          allowToggle
          w="100%"
          bg={colorMode === 'light' ? '#D95F5F' : '#D98575'}
        >
          <AccordionItem borderTop="none">
            <h2>
              <AccordionButton fontSize="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  Briefly, Who Am i ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg={colorMode === 'light' ? '#B55050' : '#C97C6D'}
              pb={4}
              color={colorMode === 'light' ? 'whiteAlpha.800' : 'gray.800'}
            >
              Hello ! My name is Ayoub Senhaji Hamim, mostly a self-taught Web
              Developer who is really interested on the front-end side of it.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton fontSize="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  When did it start ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg={colorMode === 'light' ? '#B55050' : '#C97C6D'}
              pb={4}
              color={colorMode === 'light' ? 'whiteAlpha.800' : 'gray.800'}
            >
              My story started back in 2013 when I got was really interested in
              Ethical Hacking (yes, not web development, how surprising), it was
              the flashy and cool stuff for me at the time. I eventually ended
              up joining the game development world with Unity3D, for some
              reason I was obsessed with making small horror games, most of it
              was pre-made assets but it was something i enjoyed a lot, I spent
              quite some time enjoying that world.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderBottom="none">
            <h2>
              <AccordionButton fontSize="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  What changed ?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg={colorMode === 'light' ? '#B55050' : '#C97C6D'}
              pb={4}
              color={colorMode === 'light' ? 'whiteAlpha.800' : 'gray.800'}
            >
              For various reasons, I couldn&lsquo;t follow that dream,
              that&lsquo;s when I discovered HTML, which to me was a much more
              affordable career to pursue at the time. Eventually it became
              something I&lsquo;m so deeply in love with.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Grid>
    </>
  );
}
