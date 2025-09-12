import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: 6,
        px: 2,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contato */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' },
                mb: 3,
                mt: 0
              }}
            >
              Contato
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: theme.palette.secondary.main, fontSize: 30 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Endereço
                  </Typography>
                  <Typography variant="body2">
                    Av. Paulista, 1000, São Paulo - SP
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: theme.palette.secondary.main, fontSize: 30 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    Telefone
                  </Typography>
                  <Typography variant="body2">
                    (11) 99999-9999
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: theme.palette.secondary.main, fontSize: 30 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    E-mail
                  </Typography>
                  <Typography variant="body2">
                    contato@empresa.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Redes Sociais */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' },
                mb: 3
              }}
            >
              Siga-nos
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' },
              mb: 3
            }}>
              <IconButton 
                aria-label="Facebook" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  mx: 1,
                  '&:hover': { 
                    backgroundColor: theme.palette.secondary.main,
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  width: 50,
                  height: 50
                }}
              >
                <Facebook fontSize="large" />
              </IconButton>
              
              <IconButton 
                aria-label="Twitter" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  mx: 1,
                  '&:hover': { 
                    backgroundColor: theme.palette.secondary.main,
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  width: 50,
                  height: 50
                }}
              >
                <Twitter fontSize="large" />
              </IconButton>
              
              <IconButton 
                aria-label="Instagram" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  mx: 1,
                  '&:hover': { 
                    backgroundColor: theme.palette.secondary.main,
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  width: 50,
                  height: 50
                }}
              >
                <Instagram fontSize="large" />
              </IconButton>
              
              <IconButton 
                aria-label="LinkedIn" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  mx: 1,
                  '&:hover': { 
                    backgroundColor: theme.palette.secondary.main,
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  width: 50,
                  height: 50
                }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
            
            <Typography 
              variant="body2" 
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                fontStyle: 'italic'
              }}
            >
              Conecte-se conosco nas redes sociais para ficar por dentro das novidades
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ 
          my: 4, 
          backgroundColor: 'rgba(255,255,255,0.3)',
          width: '80%',
          mx: 'auto'
        }} />
        
        {/* Direitos da Empresa */}
        <Typography 
          variant="body1" 
          sx={{
            textAlign: 'center',
            fontWeight: 'medium',
            mb: 1
          }}
        >
          © {new Date().getFullYear()} Marjorie Luis Carlos. Todos os direitos reservados.
        </Typography>
        
        
        <Typography 
          variant="caption" 
          sx={{
            display: 'block',
            textAlign: 'center',
            opacity: 0.7,
            fontSize: '0.7rem'
          }}
        >
          Desenvolvido por <Box component="span" sx={{ fontStyle: 'italic' }}>Carolina Goes</Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;