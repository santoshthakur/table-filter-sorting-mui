import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
<ColorModeContext.Provider value={{ toggleColorMode, mode }}>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
</ColorModeContext.Provider>

  );
};
