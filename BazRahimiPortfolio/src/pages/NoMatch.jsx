// Nomatch.jsx
import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <VStack spacing={4} align="stretch" mt={10} justifyContent="center" alignItems="center" height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading fontSize="4xl">404</Heading>
        <Text mt={4} fontSize="xl">
          Oops! Page not found.
        </Text>
        <Text mt={2}>Sorry, the page you are looking for doesn't exist or has been moved.</Text>
        <Button colorScheme="teal" mt={4} as={Link} to="/">
          Back to Home
        </Button>
      </Box>
    </VStack>
  );
};

export default NoMatch;
