import React from 'react';
import { Box, Heading, Text, VStack, Image, useColorModeValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const ContactResponse = () => {
  const location = useLocation();
  const userName = location.state?.user_name || 'there'; // Fallback to 'there' if no user name provided


  const boxBg = useColorModeValue('gray.50', 'gray.800'); 
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <VStack
      spacing={4}
      align="center"
      justify="center"
      height="60vh"
      bg={boxBg}
      p={8}
    >
      <Image 
        src="/public/images/contact-response.png" 
        alt="Message Sent Confirmation"
        boxSize="300px" 
        objectFit="cover"
        m={4}
        borderRadius="md" 
      />
      <Box textAlign="center" width="full" maxWidth="container.md">
        <Heading as="h2" size="2xl" mb={4} color="teal.500">
          Thank You, {userName}!
        </Heading>
        <Text fontSize="xl" mb={4} color={textColor}>
          We have received your query successfully. I appreciate you reaching out and will ensure to respond to your inquiry within 48 hours.
        </Text>
        <Text color={textColor}>
           Looking forward to discussing potential opportunities with you soon.
        </Text>
      </Box>
    </VStack>
  );
};

export default ContactResponse;
