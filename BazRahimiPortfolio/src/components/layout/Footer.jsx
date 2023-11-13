// Footer.jsx
import React from 'react';
import { Box, Text, Container, VStack, HStack, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="blue.600" color="white" py="5">
      <Container maxW="container.xl">
        <VStack spacing="2">
          <HStack justifyContent="space-between" w="full">
            <Text>&copy; {new Date().getFullYear()} My Portfolio</Text>
            <HStack spacing="4">
              {/* Add links or other content here */}
              <Link href="/about" style={{ textDecoration: 'none' }}>About</Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
              {/* More links or content */}
            </HStack>
          </HStack>
          <Text fontSize="sm">
            Made with <span role="img" aria-label="love">❤️</span> using React and Chakra UI
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
