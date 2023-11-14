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
  Select,
  Link,
  Text,
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
    




    <Box p={8} maxW="800px" mx="auto">

<Heading as="h2" size="xl" mb={4}>Let's Connect</Heading>
  <Text mb={6}>
    Whether you have a question, a project proposal, or just want to say hello,
    I'm all ears! I’m readily accessible through the contact form here, but feel free
    to connect with me via LinkedIn, GitHub, or even drop me an email. If you prefer
    a more direct approach, you're welcome to give me a call. I'm always open to 
    discussing new opportunities, collaborations, or just engaging in a good chat 
    about the latest tech trends. So don't hesitate, reach out and let's make something 
    amazing happen!
  </Text>

  {/* Contact Details */}
  <VStack spacing={2} align="flex-start" mb={4}>
    <Text>📞 Mobile: +61 415 886 790</Text>
    <Text>📧 Email: bazrahimi@hotmail.com</Text>
    <Text>🔗 LinkedIn: <Link href="https://www.linkedin.com/in/baz-rahimi-191370115/" isExternal>Baz Rahimi</Link></Text>
    <Text>👨‍💻 GitHub: <Link href="https://github.com/Bazrahimi" isExternal>Bazrahimi</Link></Text>
  </VStack>
      <form ref={form} onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Heading as="h1" size="xl">Contact Me</Heading>

          <FormControl isRequired>
          <FormLabel htmlFor="subject">Subject</FormLabel>
            <Select name="inquiry_type" id="inquiry_type" placeholder="Choose an Inquiry Type"> 
              <option value="General Inquiry">General Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Collaboration Proposal">Collaboration Proposal</option>
              <option value="Service Quote">Service Quote</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Feedback/Suggestion">Feedback/Suggestion</option>
              <option value="Other">Other</option>
            </Select>

        </FormControl>

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
