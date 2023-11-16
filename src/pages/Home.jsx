// Home.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Image, VStack } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutMe from './AboutMe';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <VStack spacing={0} align="stretch">
      {/* Slider Section */}
      <Box textAlign="center" py={10} px={6} position="relative" overflow="hidden" h="80vh" mb="10px">
        <Slider {...settings}>
          <Image src="/public/images/1699589485771.jpeg" alt="Baz Rahimi" objectFit="fill" />
          <Image src="/public/images/logo2.webp" alt="Baz Rahimi" objectFit="fill" />
          <Image src="/public/images/4173e7d5-4e70-40b6-bc03-330351f2492f.webp" alt="Baz Rahimi" objectFit="fill" />
        </Slider>
      </Box>

      {/* About Section */}
      <AboutMe />
    </VStack>
  );
};

export default Home;