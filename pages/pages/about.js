import { Box, Button, Typography } from "@mui/material";
import Layout from "../Layout";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

function Prepare() {
  return (
    <Box sx={{ padding: "30px", textAlign: "center" }}>
      <Typography
        sx={{ fontWeight: 500, fontSize: "15px", color: "primary.main" }}
      >
        OUR MISSION
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          maxWidth: "800px",
          mx: "auto",
          fontSize: { xs: "20px", sm: "30px", md: "40px" },
          color: "rgb(29, 36, 56)",
        }}
      >
        We enable developers to build and publish wonderful things
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          maxWidth: "760px",
          m: "40px auto",
          fontSize: { xs: "18px", sm: "24px" },
          color: "secondary.main",
        }}
      >
        We build products for
        <span style={{ color: "rgb(36, 153, 239)", fontWeight: 600 }}>
          developers and designers
        </span>
        . And those who aspire to become one.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: '30px',
          flexDirection: {xs:'column', md:'row'}
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alginItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Box sx={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <NewReleasesIcon
              sx={{
                width: "40px",
                height: "40px",
                padding: "7px",
                borderRadius: "4px",
                background: "rgb(36, 153, 239)",
                color: "white",
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {xs:'18px', sm:"22px"},
                color: "rgb(29, 36, 56)",
              }}
            >
              Easy
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "rgb(29, 36, 56)",
              }}
            >
              Building and deploying should be as easy as a single tap.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alginItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Box sx={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <NewReleasesIcon
              sx={{
                width: "40px",
                height: "40px",
                padding: "7px",
                borderRadius: "4px",
                background: "rgb(36, 153, 239)",
                color: "white",
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {xs:'18px', sm:"22px"},   
                color: "rgb(29, 36, 56)",
              }}
            >
              Universal
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "rgb(29, 36, 56)",
              }}
            >
              To connect the world, sites should be fast from everywhere.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alginItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Box sx={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <NewReleasesIcon
              sx={{
                width: "40px",
                height: "40px",
                padding: "7px",
                borderRadius: "4px",
                background: "rgb(36, 153, 239)",
                color: "white",
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {xs:'18px', sm:"22px"},
                color: "rgb(29, 36, 56)",
              }}
            >
              Accessible
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "rgb(29, 36, 56)",
              }}
            >
              Great care in user experience and design enables everyone.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const about = () => {
  return (
    <Layout title={"About"}>
      <Prepare />
    </Layout>
  );
};

export default about;
