import { Box, Button, Typography } from '@mui/material';
import { useColorMode } from './ThemeContext';
export default function Header() {
    const { toggleColorMode, mode } = useColorMode();
  return (
    <Box component="section" sx={{ p: 2, display:'flex', justifyContent:'space-between' }}>
           <Typography variant="h4" gutterBottom>
              Current Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Typography>
            <Button variant="contained" onClick={toggleColorMode}>
              Toggle Theme
            </Button>
    </Box>
      
 
  )
}
