// App.tsx - ScrollHandler corrigido
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// Componente para lidar com scroll automático
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Limpa qualquer estado de scroll anterior no carregamento inicial
    if (window.history.state && window.history.state.idx === 0) {
      window.history.replaceState({}, document.title);
    }

    // Scroll para o topo no carregamento inicial
    if (location.pathname === '/' && !location.state && !location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Scroll para âncora se especificado no state (após navegação)
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Pequeno timeout para garantir que a página foi renderizada
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      }
    }
    
    // Scroll para hash na URL (fallback)
    else if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;