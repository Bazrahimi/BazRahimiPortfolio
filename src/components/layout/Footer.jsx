import React from 'react';
import { Box, Text, Container, VStack, HStack, Link } from '@chakra-ui/react';
import { ExternalLinkIcon, LinkIcon, AtSignIcon } from '@chakra-ui/icons';

function Footer() {
  return (
    <Box as="footer" bg="blue.600" color="white" py="5" w="100%">
      <Container maxW="container.xl">
        <VStack spacing="2">
          <HStack justifyContent="space-between" w="full">
            <Text>&copy; {new Date().getFullYear()} Baz Rahimi</Text>
            <HStack spacing="4">
              <Link href="https://github.com/Bazrahimi" isExternal style={{ textDecoration: 'none' }}>
                Github <ExternalLinkIcon mx="2px" />
              </Link>
              <Link href="https://www.linkedin.com/in/baz-rahimi-191370115/" isExternal style={{ textDecoration: 'none' }}>
                LinkedIn <ExternalLinkIcon mx="2px" />
              </Link>
              {/* Add your Monash University badge link here */}
              <Link href="https://www.credly.com/badges/cec1de68-27a2-408d-b4e2-a01e7e2132ae" isExternal>
                Monash University Certification <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </HStack>
          <Text fontSize="sm">
            Crafted with dedication by Baz Rahimi (Full Stack Web Developer). Building the future with comprehensive programming expertise and the latest in tech innovation.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
