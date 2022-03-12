import { createTheme } from "@mui/material";

const ThemeContext = (mode) =>

  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "rgb(36, 153, 239)",
        // light: "white",
      },
      secondary: {
        main: "#9e9e9e",
      },
      textColor: {
        dark:'rgb(29, 36, 56)',
        normal: 'rgb(148, 164, 196)',
      },
      background: {
        light: 'rgba(255, 255, 255, 0.8)',
        dark: 'rgba(0, 0, 0, 0.8)',
      }

    },
    typography: {
      fontFamily: "Montserrat",
    },
    shape: {
      smallBorderRadius:'4px',
      borderRadius: '8px',
    }
  });
  
  export default ThemeContext;
