import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#e0b43b', 
      contrastText: '#ffffff', 
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue',
  },
  
});

theme = responsiveFontSizes(theme);

export default theme;