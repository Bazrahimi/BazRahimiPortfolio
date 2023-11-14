import React from 'react';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
const Contact = () => {
  // Toast is used to show feedback when the form is submitted
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // add formsubmmision logic in here
    // show a toast successful submission
    
    // show a toast on successful submission
    toast({
      title: 'Message sent.',
      description: 'we have recieved your message and will get back to you shortly.',
      status: 'success',
      duration: 5000,
      isClosabl: true,
    });
  };

  return (
    <Box p={8} maxW="500px" mx="auto">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Contact Me</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Your full name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Your email address" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" placeholder="Your message" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="100%">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;