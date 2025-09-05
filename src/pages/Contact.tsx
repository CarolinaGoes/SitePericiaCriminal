import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button, Grid, Box, Paper, Alert, Snackbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  boxSizing: 'border-box'
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.text.primary,
  maxWidth: 600,
  width: '100%',
  fontSize: '18px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    margin: '0 auto',
    fontSize: '16px',
  },
}));

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    message: '', 
    severity: 'success' as 'success' | 'error' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_10ujfvq',       // Service ID - SUBSTITUA pelo seu
        'template_3n1vu9u',      // Template ID - SUBSTITUA pelo seu
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: `Contato de ${formData.name}`,
          date: new Date().toLocaleString('pt-BR')
        },
        'bci0R3NLb9P_o5BtZ'  // Public Key - SUBSTITUA pela sua
      );
      
      setSnackbar({ 
        open: true, 
        message: 'Mensagem enviada com sucesso!', 
        severity: 'success' 
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSnackbar({ 
        open: true, 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        severity: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ContactContainer theme={theme}>
      <Container 
        maxWidth="md" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: { xs: 0, sm: 2 } 
        }}
      >
        <FormPaper elevation={6} theme={theme}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }} >
            Entre em Contato
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph align="center" sx={{ fontSize: '1.1rem' }}>
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
                  disabled={loading}
                  InputProps={{
                    style: { fontSize: '1.1rem' }
                  }}
                  InputLabelProps={{
                    style: { fontSize: '1.1rem' }
                  }}
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
                  disabled={loading}
                  InputProps={{
                    style: { fontSize: '1.1rem' } 
                  }}
                  InputLabelProps={{
                    style: { fontSize: '1.1rem' } 
                  }}
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
                  disabled={loading}
                  InputProps={{
                    style: { fontSize: '1.1rem' } 
                  }}
                  InputLabelProps={{
                    style: { fontSize: '1.1rem' }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ 
                    fontSize: '1.1rem', 
                    py: 1.5,
                    backgroundColor: theme.palette.primary.light,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                    }
                  }}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FormPaper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
};

export default Contact;