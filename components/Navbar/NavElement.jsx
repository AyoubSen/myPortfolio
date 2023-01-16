import { Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
const NavigationElement = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #c1bbb7;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
export default function NavElement({ title }) {
  return (
    <NavigationElement>
      <Heading as="h1" size="sm">
        <Link href={`${title}`}>{title}</Link>
      </Heading>
    </NavigationElement>
  );
}
