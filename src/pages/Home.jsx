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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const sliderContainerStyle = {
    textAlign: "center",
    py: { base: 2, md: 10 }, 
    px: { base: 2, md: 6 },
    position: "relative",
    overflow: "hidden",
    h: { base: "40vh", md: "80vh" }, // Smaller height on base, larger on medium screens and up
    mb: { base: 2, md: 10 }, // Reduced bottom margin on small screens
  };

  return (
    <VStack spacing={{ base: 1, md: 8 }} align="stretch">
      {/* Slider Section */}
      <Box {...sliderContainerStyle}>
        <Slider {...settings}>
          <Image src="/images/1699589485771.jpeg" alt="Baz Rahimi" objectFit="cover" boxSize="full" />
          <Image src="/images/logo2.webp" alt="Baz Rahimi" objectFit="cover" boxSize="full" />
          <Image src="/images/4173e7d5-4e70-40b6-bc03-330351f2492f.webp" alt="Baz Rahimi" objectFit="cover" boxSize="full" />
        </Slider>
      </Box>

      {/* About Section */}
      <AboutMe />
    </VStack>
  );
};

export default Home;
