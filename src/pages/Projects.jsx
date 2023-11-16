// src/pages/Projects.jsx
import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Image,
  Badge
} from '@chakra-ui/react';

import { ExternalLinkIcon, Icon } from '@chakra-ui/icons';

// Example project data
const projectData = [
  {
    title: "eBazaar Marketplace",
    description: "A versatile e-commerce marketplace catering to multiple sellers with a responsive design that adjusts seamlessly across all devices. It offers a secure authentication system, shopping cart functionalities, advanced product search, and features sorting by popularity and recency. Sellers can effortlessly list their offerings, leveraging Cloudinary for robust image uploads, and MongoDB with Mongoose ODM for data management. The application enriches product descriptions through a rich text editor, ensuring clean and safe HTML content with DOMPurify.",
    image: "/images/projects/ebazaar.png", 
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "Mongoose ODM", "DOMPurify", "chakra-UI", "JSON Web Token", "Vite", "graphql"],
    link: "https://bazaar-ac5f89a8c73b.herokuapp.com/",
    repo: "https://github.com/Bazrahimi/bazaar" 
  },
  {
    title: "ShopSphere ",
    description: "ShopSphere is a e-commerce platform with multi-seller capabilities. It features category-based search, a robust user authentication system, and allows image uploads to the cloud. As part of a three-person team, I was responsible for 100% of the backend development, the Handlebars templates and MVC, contributing 80-85% to the overall project. ",
    image: "/images/projects/shopSphere.png", 
    technologies: ["MySQL2", "Express.js", "Session", "Handlebars", "Sequelize", "Tailwind CSS", "multer"],
    link: "https://shopsphere-app-86b18455dad3.herokuapp.com/",
    repo: "https://github.com/Verouge/ShopSphere" 
  },
  
    {
      title: "All-Ready Recipes",
      description: "A collaborative front-end initiative, this project harnesses pure JavaScript to dynamically fetch and showcase recipes via the Spoonacular API. Designed to suggest culinary creations based on users' available ingredients, the application simplifies the search for suitable recipes. As a key member of a three-person team, I took the lead in developing the recipe page—arguably the heart of the user interface—contributing 100% to its UI design. My dedication to crafting a seamless and engaging experience allows users to effortlessly discover recipes that cater to the contents of their fridge and pantry.",
      image: "/images/projects/recipe.png", 
      technologies: ["HTML", "Bulma CSS", "JavaScript", "Spoonacular API"],
      link: "https://christinelea.github.io/All-Ready-Recipes/assets/html/recipe.html",
      repo: "https://github.com/ChristineLea/All-Ready-Recipes" 
    },
    {
      title: "Advanced Regex for Transaction Matching",
      description: "A comprehensive solution for extracting transaction data from PDF bank statements using advanced regular expressions. This project showcases the ability to parse complex text patterns and automate the data extraction process, a valuable asset in financial software development. It involves crafting regex patterns to accurately identify dates, transaction descriptions, and financial figures within a document, streamlining the reconciliation and analysis tasks.",
      image: "/images/projects/regex.png", 
      technologies: ["Regular Expressions", "Github Gist"],
      link: "https://gist.github.com/Bazrahimi/61547eb9d758ef55ca42aef0a470dbf9", 
      repo: "https://gist.github.com/Bazrahimi/61547eb9d758ef55ca42aef0a470dbf9" 
    },
    {
      title: "J.A.R.V.I.S Text Editor",
      description: "J.A.R.V.I.S (Just A Rather Very Intelligent System) is an advanced text editor designed for developers. This Progressive Web Application (PWA) combines the convenience of an offline-capable interface with the power of a full-featured code editor. It leverages modern web technologies like service workers for offline functionality and IndexedDB for local database storage. The editor is built with a focus on performance and user experience, integrating features like code-mirror themes for syntax highlighting and idb for robust database interactions.",
      image: "/images/projects/text-editor.png", 
      technologies: ["Webpack", "Service Workers", "IndexedDB", "Babel", "PWA"],
      link: "https://vast-wildwood-25507-132ad4bd4f85.herokuapp.com/", 
      repo: "https://github.com/Bazrahimi/text-editor" 
    },
    

    {
      title: "Social Networking API",
      description: "This project is a social networking API that allows users to share thoughts, react to friends' thoughts, and create a friend list. Built using Node.js and Express.js, it features a RESTful API design with endpoints for users and thoughts management. I implemented complex Mongoose ODM relationships and models, ensuring efficient data storage and retrieval in MongoDB. Insomnia was used extensively to test API routes. A video demo of the API in action is available, showcasing the fully functional endpoints and database interactions.",
      image: "/images/projects/socialnetworkingapi.png", 
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Insomnia"],
      link: "https://drive.google.com/file/d/1EaVKsAwIsZIBTfwCpdFPlXCXj5JRDvjz/view?pli=1", 
      repo: "https://github.com/Bazrahimi/social-network-api" 
    },
  
];

const Projects = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6}>
        Past Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projectData.map((project, index) => (
          <VStack key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src={project.image} alt={project.title} boxSize="100%" objectFit="cover" />
            <Text fontWeight="bold" fontSize="xl">
              {project.title}
            </Text>
            <Text>{project.description}</Text>
            <Box d="flex" mt="2" alignItems="center">
              {project.technologies.map((technology, index) => (
                <Badge key={index} borderRadius="full" px="2" colorScheme="teal">
                  {technology}
                </Badge>
              ))}
            </Box>
            <Link href={project.link} isExternal color="teal.500">
              View Project <Icon as={ExternalLinkIcon} mx="2px" />
            </Link>
            <Link href={project.repo} isExternal color="teal.500">
              Source Code <Icon as={ExternalLinkIcon} mx="2px" />
            </Link>

          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
