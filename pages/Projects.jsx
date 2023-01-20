import { Grid, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import Project from '@/components/ProjectsPage/Project';
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Grid align="center" ml="10%" mr="10%" mt="5%" gap={20} mb="5%">
        <Heading as="h1" fontSize="4xl">
          My Projects :
        </Heading>
        <Project
          title="Discord Clone"
          imageSrc="dc17.png"
          description="This was one of by big &lsquo;Projects&lsquo; personally.
                It&lsquo;s; as the title suggests, a clone of the famous
                Discord. Technlogies used: NextJs, ChakraUI, Formik, FireBase
                (the old version of FireBase)"
          highlatedText="NextJs, ChakraUI, Formik, FireBase"
          website="https://github.com/AyoubSen/discordscousin"
        />
        <Project
          title="Discord Bot"
          imageSrc="DiscordJs.png"
          description="A discord bot that allows you to get needed informations from the audit log, without having to check for them there, technologies used: DiscordJS, NodeJS"
          highlatedText="DiscordJS, NodeJS"
          website="https://github.com/AyoubSen/PoorLittleShitv1"
        />
        <Project
          title="Best Dictionary"
          imageSrc="dictionary.png"
          description="A dictionary that supports multiple languages, it'll give you the meaning of the word, examples, and synonyms if there are any in the API, technologies used: ReactJS, Axios, ChakraUI"
          highlatedText="ReactJS, Axios, ChakraUI"
          website="https://bestdictionary.netlify.app/"
        />
        <Project
          title="Ayoub's Chat App"
          imageSrc="chatAppProto.png"
          description="A small clone of the Messenger App, technologies used: NextJs, ChakraUI, FireBase (the old version of FireBase)"
          highlatedText="NextJs, ChakraUI, FireBase"
          website="https://ayoubschat-git-main-senraja0000.vercel.app/"
        />
        <Project
          title="Best Company"
          imageSrc="bestCompany.png"
          description="A website I made for a presentation for an English Class, technologies used: NextJS, ChakraUI"
          highlatedText="NextJS, ChakraUI"
          website="https://bestcompany-senraja0000.vercel.app/"
        />
        <Project
          title="French Presentation"
          imageSrc="frpresentation.png"
          description="A presentation I made for a french class, technologies used: MDX"
          highlatedText="MDX"
          website="https://frpresentation.vercel.app/#0/"
        />
      </Grid>
    </>
  );
}
