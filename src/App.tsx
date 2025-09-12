import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Home from "./pages/Home/Home";
import Footer from './pages/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;