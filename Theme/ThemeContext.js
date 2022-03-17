import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const ThemeContext = (Mode) =>

  createTheme({
    palette: {
      mode: Mode,
      // common: {
      //   black: 'red',
      //   white: 'rgb(243, 244, 249)'
      // },
      primary: {
        main: "rgb(36, 153, 239)",
        light: blue[500],
        dark: blue[600],
      },
      secondary: {
        main: "#9e9e9e",
      },
      text: {
        primary:'rgb(29, 36, 56)',
        secondary: 'rgb(148, 164, 196)',
        disable: '(255, 255, 255, 0.5)',
      },
      // background: {
      //   // paper: 'rgb(34, 43, 54)',
      //   contrastText: 'white',
      //   main: 'rgb(243, 244, 249)',
      //   light: 'rgb(243, 244, 249)',
      //   dark: 'rgba(0, 0, 0, 0.1)',
      // }

    },
    typography: {
      fontFamily: "Montserrat",
    },
    shape: {
      smallBorderRadius:2,
      borderRadius: 4,
    }
  });
  
  export default ThemeContext;
