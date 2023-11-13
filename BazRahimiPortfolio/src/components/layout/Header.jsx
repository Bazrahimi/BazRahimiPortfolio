import React from "react";
import { Box, Heading, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="blue.500" w="100%" p={4} color="white" display="flex" alignItems="center" justifyContent="space-between">
      <Image src="../src/assets/images/logo3.png" alt="Baz Rahimi Logo" height="80px" width="150px"/>
      <Heading as="h1" size="xl">Baz Rahimi's Portfolio</Heading>
      {/* Add more elements if needed */}
    </Box>
  )
};

export default Header;
