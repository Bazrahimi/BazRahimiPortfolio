// components/ToggleThemeButton.jsx
import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      isRound={true}
      size="md"
      aria-label="Toggle theme"
    />
  );
};

export default ToggleThemeButton;
