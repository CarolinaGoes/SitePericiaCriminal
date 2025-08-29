import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box } from '@mui/material';
import aboutImage from '../assets/images/Marjorie.jpg';

// Estilizando o contêiner principal da seção
const SectionContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.primary.main,
}));

// Estilizando a imagem
const StyledImage = styled('img')({
  width: '75%',
  height: 'auto',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
});

// AQUI ESTÁ A MUDANÇA: O componente SectionTitle foi removido.
// Ele não é mais necessário, já que o estilo foi aplicado diretamente
// à Typography abaixo.

const About = () => {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Typography
          margin={theme.spacing(4, 0)}
          variant="h3"
          component="h1"
          align="center"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Sobre a Perícia Grafotécnica
        </Typography>

        <Typography
          variant="h5"
          align="center"
          paragraph
          sx={{ color: 'primary.contrastText' }}
        >
          A ciência que analisa a autenticidade e a autoria de documentos escritos à mão. 🕵️‍♂️
        </Typography>

        <Grid container spacing={5} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <StyledImage src={aboutImage} alt="Perito examinando documentos" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.primary.contrastText,
              }}
            >
              Nossa Missão
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{ color: 'primary.contrastText' }}
            >
              Analisamos minuciosamente assinaturas e textos para detectar falsificações, identificar autores e garantir a validade jurídica de documentos. Nossa missão é fornecer laudos técnicos precisos e confiáveis que ajudem a proteger os direitos de nossos clientes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default About;