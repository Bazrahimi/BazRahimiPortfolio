// components/Navbar.jsx
import React from 'react';
import { Flex, Link, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex as="nav" bg="blue.500" w="100%" p={4} align="center" justify="space-between" pt="0px" pb="1px">
      {/* Navigation items */}
      <Link href="/" style={{ textDecoration: 'none', color: 'white' }} _hover={{ color: 'teal.200' }}>
        Home
      </Link>
      <Button colorScheme="teal" variant="ghost" onClick={() => navigate('/projects')}>
        Projects
      </Button>
      <Button colorScheme="teal" variant="ghost" onClick={() => navigate('/about')}>
        About
      </Button>
      <Button colorScheme="teal" variant="ghost" onClick={() => navigate('/contact')}>
        Contact
      </Button>
      {/* Add more navigation items as needed */}
    </Flex>
  );
};

export default Navbar;
