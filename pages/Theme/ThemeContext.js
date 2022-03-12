import { createTheme } from "@mui/material";

const ThemeContext = (prevMode) =>

  createTheme({
    palette: {
      primary: {
        main: "rgb(36, 153, 239)",
        light: "white",
      },
      secondary: {
        main: "#9e9e9e",
      },
      textColor: {
        main:'rgb(29, 36, 56)',
      }
    },
    toggleColorMode: (prevMode) => {(prevMode) =>
      prevMode === "light" ? "dark" : "light"},
    typography: {
      fontFamily: "Montserrat",
    },
  });
  
  export default ThemeContext;
