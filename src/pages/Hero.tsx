import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Avatar from "../assets/images/avatar.png";
import theme from "../theme.ts";
import StyledButton from "../components/StyledButton/StyledButton.tsx";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",

  }));

  const StyledImg = styled("img")(() => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    width: "80%",

  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} textAlign="center">
            <StyledImg src={Avatar} alt="Foto de perfil de Marjorie Carlos" />
          </Grid>

          <Grid item xs={12} md={7} textAlign="center">
            <Typography color="primary.contrastText" variant="h1" gutterBottom>
              Marjorie Carlos
            </Typography>
            <Typography color="primary.contrastText" variant="h2" gutterBottom>
              Perícia Criminal
            </Typography>

            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">

                <StyledButton variant="outlined" href="#servicos">
                  {<FingerprintIcon />}
                  
                    Serviços
                  
                </StyledButton>

              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">

                <StyledButton variant="outlined"  href="#contato">
                  {<PermContactCalendarIcon />}
                  
                    Entre em Contato
                  
                </StyledButton>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;