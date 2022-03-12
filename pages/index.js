import { ThemeProvider } from "@mui/material/styles";

import { Box } from "@mui/system";
import { Provider } from "react-redux";
import store from "../redux/store";
import ThemeContext from "./Theme/ThemeContext";

import AppBar from "./AppBar";

export default function Home() {
  const theme = ThemeContext("mode");
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <Box
          sx={{
            maxWidth: "1920px",
            margin: "0 auto",
            // backgroundColor: "background.dark",
          }}
        >
          <AppBar/>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}
