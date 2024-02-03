// muiTheme.ts
import { createTheme } from "@mui/material/styles";
// have work to do here
const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(2rem, 8vw, 2.275rem)",
      fontWeight: 700,
    },
    h2: {
      fontSize: "clamp(1.8rem, 8vw+1rem, 5rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(1.8rem, 8vw, 2.25rem)",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "clamp(1.3rem, 2vw, 1.5rem)",
      fontWeight: 500,
    },
    h6: {
      fontSize: "clamp(1.2rem, 2vw, 1.3rem)",
      fontWeight: 400,
    },
    body1: {
      fontSize: "clamp(1.4rem,2vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "clamp(1.3rem, 2vw, 1.2rem)",
      fontWeight: 500,
    },
  },
});

export default theme;
