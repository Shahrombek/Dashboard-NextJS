import {
  Box,
  Grid,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import UkoDashboard from "../../components/dashboard/UkoDashboard";
import Layout from "../Layout";
// icons

import CreateTable from "../../components/dashboard/CreateTable";
import { tablehead, rows, saasData } from "../../data/SaasData";
import BarChart from "../../Charts/BarChart";

import RadialChart from "../../Charts/RadialChart";


function Prepare() {
  return (
    <Box>
      {/* header */}
      <Grid container sx={{ width: "100%", p: "0px 15px" }}>
        {saasData.map((item) => {
          return (
            <Grid
              key={item.price}
              item
              xs={12}
              sm={6}
              lg={3}
              sx={{ p: "0px 15px" }}
            >
              <Paper
                sx={{
                  m: "15px 0px",
                  p: "30px 20px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <IconButton
                  sx={{
                    "&:hover": { background: item.bgColor },
                    color: item.color,
                    background: item.bgColor,
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {item.icon}
                </IconButton>
                <Box>
                  <Typography sx={{ color: "secondary.main", fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                    {item.price}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Grid container sx={{ p: "15px 30px" }} spacing={4}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: "30px" }}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: "50px 30px" }}>
            <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',fontSize: "14px", fontWeight: 600, mb:3}}>
              <span>Analytics</span>
              <span style={{color: 'grey'}}>All weeks</span>
            </Typography>
            <RadialChart />
            <Typography sx={{fontSize: "13px", fontWeight: 500, textAlign:'center', my:2}}>
              <span style={{display: 'inline-block', margin: '0px 5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor:'rgba(254, 176, 25, 0.85)'}}></span>Sales &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{display: 'inline-block', margin: '0px 5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor:'rgba(0, 227, 150, 0.85)'}}></span>Orders &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{display: 'inline-block', margin: '0px 5px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor:'rgba(0, 143, 251, 0.85)'}}></span>Return &nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "15px 30px",
          gap: "30px",
          flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
        }}
      >
        <Paper sx={{ flex: 1 }}>
          <CreateTable head={tablehead} body={rows} title={"Recent Orders"} />
        </Paper>

        <Paper
          sx={{
            width: { xs: "100%", md: "280px", lg: "350px" },
            p: { xs: "20px", sm: "30px 20px 15px 20px" },
          }}
        >
          <Typography sx={{ fontSize: "15px", fontWeight: 600, ml: 2, mb: 3 }}>
            Top selling Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              m: { xs: "15px 0px", sm: "20px 15px" },
              gap: "12px",
            }}
          >
            <img
              style={{ width: "100px" }}
              src="https://uko-react.vercel.app/static/products/black-keds.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                Nike airmax 170
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                $567
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              m: { xs: "15px 0px", sm: "20px 15px" },
              gap: "12px",
            }}
          >
            <img
              style={{ width: "100px" }}
              src="https://uko-react.vercel.app/static/products/green-keds.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                Nike airmax 170
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                $200
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              m: { xs: "15px 0px", sm: "20px 15px" },
              gap: "12px",
            }}
          >
            <img
              style={{ width: "100px" }}
              src="https://uko-react.vercel.app/static/products/yellow-keds.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                Nike airmax 170
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                $400
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* footer */}
      <Box sx={{ m: "0 30px" }}>
        <UkoDashboard src="https://uko-react.vercel.app/static/illustration/sass-dashboard.svg" />
      </Box>
    </Box>
  );
}

const saas = () => {
  return (
    <Layout title={"Saas"}>
      <Prepare />
    </Layout>
  );
};

export default saas;
