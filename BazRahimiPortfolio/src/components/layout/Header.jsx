import React from 'react';
import { Flex, Heading, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex align="center"  p={4} bg="blue.500" color="white" w="100%" pb="0" pt="0px">
      {/* Adjust the sizes as needed to ensure the logo isn't too dominating */}
      <Image src="../../src/assets/images/header.png" alt="BR Logo" htmlWidth="70px" htmlHeight="auto" />
      <Heading as="h1" size="xl" marginLeft="2">
      Coding Chronicles with Baz Rahimi
      </Heading>
      {/* You can add a navigation button or links here if needed */}
    </Flex>
  );
};

export default Header;
