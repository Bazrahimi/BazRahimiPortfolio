// src/pages/AboutMe.jsx
import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const AboutMe = () => {
  const bannerSrc = '/images/aboutme.webp'
  return (
    <Box p={8}>
      <VStack spacing={4} align="flex-start">

        <Text pl="15px">
        With a decade of successfully spearheading ventures in the small business sector, I've honed the art of steering projects to success. Transitioning this passion for creation and leadership, I've embarked on a full-time voyage as a web developer, where the canvas of the web is my new frontier.
        </Text>

        

        <Heading as="h2" size="lg">
          The Future Is Now
        </Heading>
        <Text pl="15px">
          My gaze is firmly set on the horizon of innovation — AI and Machine Learning are not just buzzwords to me, but beacons of the untapped potential I seek to explore. As a futurist, I am driven by the endless possibilities that coding and technology unlock, shaping solutions that transcend today’s challenges.
        </Text>

        <Image src={bannerSrc} alt="Baz Rahimi" width="full" maxWidth={{ base: "80%", sm: "60%", md: "40%", lg: "30%" }} m="auto" mb={4} borderRadius="md" />

        <Heading as="h2" size="lg" mb={4}>
          Skills That Forge Frontiers
        </Heading>
        <Text mb={2} pl="15px">
          My toolkit is an arsenal of the latest and greatest in web development:
        </Text>

        <List spacing={2} pl="20px">
         <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Crafting semantic beauty with <Text as="span" fontWeight="bold">HTML</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Styling the web's canvas with modern <Text as="span" fontWeight="bold">CSS</Text> techniques.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Orchestrating symphonies of functionality with <Text as="span" fontWeight="bold">JavaScript</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Bringing servers to life with <Text as="span" fontWeight="bold">Node.js</Text> and <Text as="span" fontWeight="bold">Express.js</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Sculpting data into form with <Text as="span" fontWeight="bold">SQL</Text> and <Text as="span" fontWeight="bold">NoSQL databases</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Weaving the web's fabric with <Text as="span" fontWeight="bold">Server-Side APIs</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Mastering object-oriented paradigms with <Text as="span" fontWeight="bold">OOP</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Architecting robust applications with <Text as="span" fontWeight="bold">MVC</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Tapping into the backbone of tech with <Text as="span" fontWeight="bold">Computer Science concepts</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Enhancing user experiences with <Text as="span" fontWeight="bold">Progressive Web Applications (PWA)</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Seamlessly integrating front to back with the <Text as="span" fontWeight="bold">MERN stack</Text>.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Maintaining stateful harmony with <Text as="span" fontWeight="bold">State Management</Text>.
          </ListItem>
          <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Expertise in version control and collaboration with <Text as="span" fontWeight="bold">Git</Text> and managing repositories on <Text as="span" fontWeight="bold">GitHub</Text>.
         </ListItem>
         <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Managing and saving files in the cloud with <Text as="span" fontWeight="bold">Cloudinary</Text>.
          </ListItem>
        </List>
        <Heading as="h2" size="lg">
          Teamwork at the Heart of Code
        </Heading>
        <Text>
          Collaboration is the pulse of progress. In multiple team-based projects, my contributions have often been the core of our GitHub repositories — a testament to my commitment and collaborative spirit.
        </Text>
        <Heading as="h2" size="lg">
        Join Me on This Journey
        </Heading>
        <Text pl="15px">
           As I code not just for today, but for the promise of a smarter, more intuitive tomorrow, I invite you to join me. Whether it's a project collaboration or a conversation on the next big thing, my digital door is always open.
        </Text>
 
      </VStack>
    </Box>
  );
};

export default AboutMe;
