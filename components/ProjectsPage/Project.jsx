import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Image,
  Text,
  Card,
  Stack,
  Heading,
  Highlight,
  CardBody,
  useColorMode,
} from '@chakra-ui/react';
export default function Project({
  title,
  imageSrc,
  description,
  highlatedText,
  website,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        borderColor={colorMode === 'light' ? 'gray.800' : undefined}
      >
        <Link href={website} target="_blank">
          <Box
            _hover={
              colorMode === 'light' ? { opacity: '0.9' } : { opacity: '0.3' }
            }
            transition="0.2s"
          >
            <Image
              src={imageSrc}
              alt="Landing Page of a Discord clone"
              maxH="500px"
            />
          </Box>
        </Link>

        <Stack w="100%">
          <CardBody>
            <Link href={website} target="_blank">
              <Heading
                size="lg"
                _hover={{ transform: 'translateY(-2px)' }}
                w="100%"
              >
                {title}
              </Heading>
            </Link>
            <Box mt="5" fontWeight="bold">
              <Highlight
                query={highlatedText}
                styles={
                  colorMode === 'light'
                    ? { bg: '#D95F5F', color: 'whiteAlpha.800', px: '1' }
                    : { bg: '#D98575', color: 'gray.800', px: '1' }
                }
              >
                {description}
              </Highlight>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
