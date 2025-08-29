import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Importe ThemeProvider
import CssBaseline from '@mui/material/CssBaseline'; // Importe CssBaseline
import theme from './theme'; // Importe seu tema personalizado
import Home from "./pages/Home/Home"; // Seu componente Home

const App = () => {
  return (
    // Envolva toda a sua aplicação com o ThemeProvider
    <ThemeProvider theme={theme}>
      {/* O CssBaseline aplica estilos básicos para consistência entre navegadores */}
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;