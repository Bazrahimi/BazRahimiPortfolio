// components/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    // Set the VStack to be a flex container with minimum height of 100vh
    <VStack minH="100vh" justifyContent="space-between" spacing="0" flexDirection="column">
      <Header />
      {/* flexGrow="1" will make the Box grow and push the Footer to the bottom */}
      <Box as="main" flexGrow="1" width="full">
        <Outlet />
      </Box>
      <Footer />
    </VStack>
  );
}

export default Layout;
