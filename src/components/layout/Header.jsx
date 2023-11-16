import React from 'react';
import { Box, Flex, Image, Link, Button, Heading } from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ToggleThemeButton from '../ToggleTheme';


const Header = () => {
  const navigate = useNavigate();

  return (
    <Box bg="blue.500" color="white" w="100%">
      <Flex align="center" justify="flex-start" wrap="wrap" p={0}>
        {/* Logo and Heading with Hover Effect */}
        <Flex align="center" mr={8} cursor="pointer"
              _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
              onClick={() => navigate('/')}>
          <Image src="/images/header.png" alt="BR Logo" htmlWidth="70px" htmlHeight="auto" mr={0} />
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>Web Portfolio</Heading>
        </Flex>

        <Flex align="center" mr={4}>
          <Link href="tel:+61415886790" isExternal _hover={{ textDecoration: "underline" }} display="flex" alignItems="center">
            <FaPhone mr={2} /> 
            0415 886 790
          </Link>
        </Flex>

        {/* Navigation */}
        <Flex align="center">
          <Button variant="ghost" _hover={{ bg: "teal.500", color: "white" }} onClick={() => navigate('/projects')}>
            Projects
          </Button>
          <Button variant="ghost" _hover={{ bg: "teal.500", color: "white" }} onClick={() => navigate('/about')}>
            About Me
          </Button>
          <Button variant="ghost" _hover={{ bg: "teal.500", color: "white" }} onClick={() => navigate('/contact')}>
            Contact
          </Button>
       
        </Flex>
        <Flex align="center">
          <ToggleThemeButton />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;