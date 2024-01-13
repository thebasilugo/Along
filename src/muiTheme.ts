// muiTheme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// have work to do here
let theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          '@media (min-width:2000px)': {
            fontSize: '9rem', // Font size for medium screens and up
          },
        },

      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
