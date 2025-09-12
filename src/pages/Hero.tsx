import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import theme from "../theme.ts";
import StyledButton from "../components/StyledButton.tsx";
import StyledLogo from "../components/StyledLogo.tsx";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(4),
  }));

  return (
    <StyledHero>
      <Container sx={{ marginBottom: "auto" }} maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} textAlign="center">
            <StyledLogo />
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
                <StyledButton variant="outlined" to="#sobre">
                  <InfoOutlinedIcon />
                  Sobre
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton variant="outlined" to="#servicos">
                  <FingerprintIcon />
                  Serviços
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton variant="outlined" to="#contato">
                  <PermContactCalendarIcon />
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