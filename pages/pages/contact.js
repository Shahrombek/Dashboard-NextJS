import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import Layout from "../Layout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Prepare() {
  return (
    <Box sx={{ padding: "30px", textAlign: "center" }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontWeight: 700,
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            color: "rgb(29, 36, 56)",
          }}
        >
          Our teams are here to help
        </Typography>
        <Typography
          sx={{ fontWeight: 500, fontSize: "15px", color: "secondary.main" }}
        >
          Get in touch and let us know how we can help.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{my:5}}>
      <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: "30px", flex: 1 }}>
            <IconButton
              size="large"
              sx={{
                background: "rgb(36, 153, 239, 0.2)",
                "&:hover": { background: "rgb(36, 153, 239, 0.2)" },
                color: "rgb(36, 153, 239)",
                fontSize: "25px",
              }}
            >
              <PersonOutlineIcon
                fontSize="inherit"
                sx={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 700,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "18px", sm: "25px", md: "35px" },
                color: "rgb(29, 36, 56)",
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "13px", mt: 1, mb: 5 }}
            >
              We’re here to help with any question or code issue.
            </Typography>
            <Button variant='contained' sx={{width: "100%", textTransform: "capitalize"}}>
              Get Support &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: "30px", flex: 1 }}>
            <IconButton
              size="large"
              sx={{
                background: "rgb(36, 153, 239, 0.2)",
                "&:hover": { background: "rgb(36, 153, 239, 0.2)" },
                color: "rgb(36, 153, 239)",
                fontSize: "25px",
              }}
            >
              <PersonOutlineIcon
                fontSize="inherit"
                sx={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 700,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "18px", sm: "25px", md: "35px" },
                color: "rgb(29, 36, 56)",
              }}
            >
              Sales
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "13px", mt: 1, mb: 5 }}
            >
              We’re here to help with any question or code issue.
            </Typography>
            <Button variant='contained' sx={{width: "100%", textTransform: "capitalize"}}>
              Get Support &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: "30px", flex: 1 }}>
            <IconButton
              size="large"
              sx={{
                background: "rgb(36, 153, 239, 0.2)",
                "&:hover": { background: "rgb(36, 153, 239, 0.2)" },
                color: "rgb(36, 153, 239)",
                fontSize: "25px",
              }}
            >
              <PersonOutlineIcon
                fontSize="inherit"
                sx={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 700,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "18px", sm: "25px", md: "35px" },
                color: "rgb(29, 36, 56)",
              }}
            >
              Partners
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "13px", mt: 1, mb: 5 }}
            >
              We’re here to help with any question or code issue.
            </Typography>
            <Button variant='contained' sx={{width: "100%", textTransform: "capitalize"}}>
              Get Support &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: "30px", flex: 1 }}>
            <IconButton
              size="large"
              sx={{
                background: "rgb(36, 153, 239, 0.2)",
                "&:hover": { background: "rgb(36, 153, 239, 0.2)" },
                color: "rgb(36, 153, 239)",
                fontSize: "25px",
              }}
            >
              <PersonOutlineIcon
                fontSize="inherit"
                sx={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <Typography
              sx={{
                fontWeight: 700,
                maxWidth: "800px",
                mx: "auto",
                fontSize: { xs: "18px", sm: "25px", md: "35px" },
                color: "rgb(29, 36, 56)",
              }}
            >
              Docs
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "13px", mt: 1, mb: 5 }}
            >
              We’re here to help with any question or code issue.
            </Typography>
            <Button variant='contained' sx={{width: "100%", textTransform: "capitalize"}}>
              Get Support &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
          </Paper>
        </Grid>
       
      </Grid>
    </Box>
  );
}

const contact = () => {
  return (
    <Layout title={"Contact"}>
      <Prepare />
    </Layout>
  );
};

export default contact;
