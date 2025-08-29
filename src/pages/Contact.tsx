import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid, Box, Paper } from '@mui/material';

// Estilizando o contêiner principal para centralizar o conteúdo
const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

// Estilizando o Paper para o formulário
const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  maxWidth: 600,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // (por exemplo, para um backend, um serviço de e-mail, etc.).
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso!');

    // Resetar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <Container maxWidth="md">
        <FormPaper elevation={6}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Entre em Contato
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph align="center">
            Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  label="Nome Completo"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  name="email"
                  label="E-mail"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  name="message"
                  label="Sua Mensagem"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Enviar Mensagem
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FormPaper>
      </Container>
    </ContactContainer>
  );
};

export default Contact;