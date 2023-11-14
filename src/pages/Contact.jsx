const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
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
  const form = useRef();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();



    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then((result) => {
        toast({
          title: 'Message sent.',
          description: "We've received your message and will get back to you shortly.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }, (error) => {
        toast({
          title: 'Error',
          description: "There was an error sending your message. Please try again later.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={8} maxW="500px" mx="auto">
      <form ref={form} onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Heading as="h1" size="xl">Contact Me</Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input name="user_name" id="name" placeholder="Your full name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="user_email" id="email" type="email" placeholder="Your email address" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea name="message" id="message" placeholder="Your message" />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" width="100%">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
