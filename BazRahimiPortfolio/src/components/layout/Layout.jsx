import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, VStack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <VStack>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </VStack>
  )
}

export default Layout;