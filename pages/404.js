import { Box, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeContext from "../Theme/ThemeContext";

const notFound = () => {
  const theme = ThemeContext("mode");
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: { xs: "8px", sm: "15px" },
          fontFalimy: "Montserrat",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "250px !important",
              sm: "300px !important",
              md: "350px !important",
            },
          }}
        >
          <img
            src={"/errorNew.svg"}
            alt="Error"
            style={{width:"100%"}}
          />
        </Box>
        <Typography
          sx={{
            fontSize: {
              xs: "40px",
              sm: "50px",
              md: "60px",
              color: "rgb(36, 153, 239)",
              fontWeight: 700,
            },
          }}
        >
          Ooops... 404!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "rgb(148, 164, 196)",
            fontWeight: 500,
          }}
        >
          The page you requested could not be found.
        </Typography>
        <Typography
          sx={{
            color: "rgb(36, 153, 239)",
            textDecoration: "underline",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          <Link sx={{ color: "blue" }} href="/">
            <a>Back to Dashboard</a>
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default notFound;
