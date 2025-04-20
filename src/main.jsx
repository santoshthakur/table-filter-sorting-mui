import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme.js'; 
// // adjust the path as needed

import { ThemeProvider } from './ThemeContext'; // custom theme context

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <App />
  </ThemeProvider>

)
