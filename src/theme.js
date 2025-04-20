// theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#1976d2',
          },
          background: {
            default: '#f5f5f5',
          },
        }
      : {
          primary: {
            main: '#90caf9',
          },
          background: {
            default: '#121212',
          },
        }),
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
