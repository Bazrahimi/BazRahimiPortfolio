import { Box, Container, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const hoverStyle = {
    textDecoration: 'none',
    _hover: {
      transform: 'scale(1.05)',
      shadow: '0 0 8px 2px rgba(255, 255, 255, 0.6)', // White glow
    },
  };


  return (
    <Box as="footer" bg="blue.600" color="white" py="5" w="100%">
      <Container maxW="container.xl">
        <VStack spacing="2">
          <HStack justifyContent="space-between" w="full">
          <HStack spacing="4" justify="space-between" w="full">
              <Link href="https://github.com/Bazrahimi" isExternal {...hoverStyle}>
                <FaGithub fontSize="5em" />
                <Text fontSize="1em">My Github</Text>
              </Link>

              <Link href="https://www.linkedin.com/in/baz-rahimi-191370115/" isExternal {...hoverStyle}>
                <FaLinkedin fontSize="5em" />
                <Text fontSize="1em">My Linkedin</Text>
              </Link>

              <Link href="https://www.credly.com/badges/cec1de68-27a2-408d-b4e2-a01e7e2132ae" isExternal {...hoverStyle}>
                <FaGraduationCap fontSize="5em" />
                <Text fontSize="1em">My Full Stack Badge (Monash Uni)</Text>
              </Link>
            </HStack>
        

          </HStack>
          <Text>&copy; {new Date().getFullYear()} Baz Rahimi</Text>
          <Text fontSize="sm">
            Crafted with dedication by Baz Rahimi (Full Stack Web Developer). Building the future with comprehensive programming expertise and the latest in tech innovation.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
