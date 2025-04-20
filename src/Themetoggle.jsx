import React from 'react';
import { useColorMode } from './ThemeContext';
import Button from '@mui/material/Button';

const ThemeToggle = () => {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="outlined">
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggle;
