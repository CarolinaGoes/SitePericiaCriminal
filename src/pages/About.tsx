import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box } from '@mui/material';
import aboutImage from '../assets/images/Marjorie.jpg';

// Container da seção
const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh', // permite crescer sem sobreposição
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  
}));

// Estilizando a imagem
const StyledImage = styled('img')({
  width: '75%',
  height: 'auto',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
  margin: 'auto',
});

const About = () => {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* Título */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontFamily: theme.typography.fontFamily,
            mb: 3,
          }}
        >
          Sobre a Perícia Grafotécnica
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h5"
          align="center"
          paragraph
          sx={{
            color: theme.palette.primary.contrastText,
            mb: 6,
            mx: { xs: 2, md: 10 }, // margem menor no mobile
          }}
        >
          A ciência que analisa a autenticidade e a autoria de documentos escritos à mão. 🕵️‍♂️
        </Typography>

        {/* Grid responsivo */}
        <Grid container spacing={6} alignItems="flex-start">
          {/* Imagem */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledImage src={aboutImage} alt="Perito examinando documentos" />
          </Grid>

          {/* Texto */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.primary.contrastText,
                mb: 2, 
                textAlign: { xs: 'center', md: 'left'}
                
              }}
            >
              Nossa Missão
            </Typography>

            <Typography
              variant="body1"
              paragraph
              marginTop={5}
              sx={{
                color: theme.palette.primary.contrastText,
                mx: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left'}  
              }}
            >
              Analisamos minuciosamente assinaturas e textos para detectar falsificações, 
              identificar autores e garantir a validade jurídica de documentos. 
              Nossa missão é fornecer laudos técnicos precisos e confiáveis 
              que ajudem a proteger os direitos de nossos clientes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default About;
