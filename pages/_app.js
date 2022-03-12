import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import ThemeContext from "./Theme/ThemeContext";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  return (
    <ThemeProvider theme={ThemeContext(mode)}>
      <Provider store={store}>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="next app dashboard" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Box
          sx={{
            maxWidth: "1920px",
            margin: "0 auto",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
