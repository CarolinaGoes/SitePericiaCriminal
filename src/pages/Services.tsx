import { styled } from '@mui/material/styles';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import theme from '../theme.ts';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main, 
  color: theme.palette.primary.contrastText, 
  transition: 'transform 0.3s ease-in-out',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[6],
    border: `1px solid ${theme.palette.secondary.main}`, 
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  backgroundColor: theme.palette.primary.main, 
  height: '100vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  width: '100%',
  alignItems: 'center',
  maxWidth: '100vw',
  
}));

const Servicos = () => {
  const servicos = [
    {
      title: 'Análise de Assinaturas',
      description:
        'Verificação detalhada da autenticidade de assinaturas em documentos, comparando traços, pressão e características únicas para identificar possíveis falsificações.',
    },
    {
      title: 'Exame de Documentos',
      description:
        'Análise técnica de documentos para detectar alterações, adulterações ou manipulações, utilizando métodos científicos e equipamentos especializados.',
    },
    {
      title: 'Identificação de Autoria',
      description:
        'Estudo grafotécnico para determinar a autoria de textos manuscritos, comparando padrões de escrita e características individuais.',
    },
    {
      title: 'Perícias Judiciais',
      description:
        'Elaboração de laudos periciais para processos judiciais, com análises imparciais e detalhadas, atendendo às exigências legais.',
    },
    {
      title: 'Consultoria Técnica',
      description:
        'Assessoria especializada para advogados, empresas e particulares em casos que envolvam documentos e assinaturas, oferecendo suporte técnico e pareceres.',
    },
    {
      title: 'Treinamento e Capacitação',
      description:
        'Cursos e workshops sobre técnicas grafotécnicas para profissionais que desejam aprofundar conhecimentos na área de perícia documental.',
    },
  ];

  return (
    <StyledContainer maxWidth={false}>
      <div style={{ }}/> 
        <Typography
          margin={theme.spacing(4, 0)}
          variant="h3" 
          component="h2"
          align="center"
          gutterBottom
          sx={{
            color: theme.palette.secondary.main, 
            fontWeight: 'bold',
            fontFamily: theme.typography.fontFamily, 
          }}
        >
          Serviços de Perícia Grafotécnica
        </Typography>
        
      <Grid container maxWidth="lg">
        {servicos.map((servico, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography
                  variant="h5" 
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {servico.title}
                </Typography>
                <Typography
                  variant="body1" 
                  sx={{
                    fontFamily: theme.typography.fontFamily, 
                  }}
                >
                  {servico.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Servicos;