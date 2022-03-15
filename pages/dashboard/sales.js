import {
  Box,
  Button,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import Layout from "../Layout";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import CreateTable from "../../components/dashboard/CreateTable";
import { rows, tablehead } from "../../data/SalesData";
import BarChart from "../../Charts/BarChart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function Prepare() {
  return (
    <Box sx={{ padding: "0px 30px" }}>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 0, sm: 0, md: "30px" },
          flexWrap: { xs: "wrap", lg: "nowrap" },
        }}
      >
        <Paper
          sx={{
            flex: { xs: "full", sm: 1 },
            width: "100%",
            minWidth: { xs: "200px", sm: "500px", md: "600px" },
            padding: { xs: "30px 20px !important", sm: "15px 40px !important" },
            borderRadius: "shape.borderRadius",
            background: "background.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            m: "15px 0px",
          }}
        >
          <Box
            sx={{
              order: { xs: 2, sm: 1 },
              maxWidth: { xs: "300px", sm: "auto" },
              m: { xs: "0 auto", sm: "0" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  fontWeight: 600,
                  color: "text.primary",
                  width: { xs: "100%", sm: "auto" },
                },
              }}
            >
              Congratulations Watson!
              <span style={{ fontSize: "24px" }}>🎉</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              You have done{" "}
              <span style={{ color: "rgb(36, 153, 239)" }}>76%</span> more sales
              today. Check your inventory and update your stocks.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                p: "15px",
                textTransform: "capitalize",
                borderRadius: "12px",
                width: "250px",
                mt: 4,
              }}
            >
              <EnergySavingsLeafOutlinedIcon />
              <Box sx={{ width: "80%", ml: 1 }}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>Star Seller</span> <span>76%</span>
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    height: "4px",
                    borderRadius: "5px",
                    background: "rgb(255, 255, 255, 0.5)",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "76%",
                      height: "100%",
                      borderRadius: "5px",
                      background: "white",
                    }}
                  ></span>
                </Typography>
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "60%", sm: "auto" },
              m: { xs: "5px auto 10px auto", sm: "0" },
              order: { xs: 1, sm: 2 },
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://uko-react.vercel.app/static/illustration/sales-dashboard.svg"
            />
          </Box>
        </Paper>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: { xs: "auto", sm: 1 },
            flexWrap: { sx: "wrap !important", md: "nowrap" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 0, sm: "30px" },
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Paper sx={{ p: "15px 20px", margin: "15px 0px", flex: 1 }}>
              <Box
                sx={{
                  display: "inline-block",
                  background: "rgba(36, 153, 239, 0.3)",
                  color: "primary.main",
                  borderRadius: "7px",
                  width: "30px",
                  height: "30px",
                  fontSize: "30px",
                  textAlign: "center",
                  mb: "8px",
                }}
              >
                <BarChartRoundedIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "secondary.main",
                  fontWeight: 500,
                }}
              >
                Revenue
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  $36k
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  <ArrowUpwardOutlinedIcon
                    sx={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      fontSize: "12px",
                      color: "rgb(44, 197, 189)",
                      background: "rgba(39, 206, 136, 0.2)",
                      borderRadius: "50%",
                      mb: "-3px",
                      mr: "5px",
                    }}
                  />
                  +10.23%
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{ p: "15px 20px", margin: "15px 0px", flex: 1 }}>
              <Box
                sx={{
                  display: "inline-block",
                  background: "rgb(167, 152, 255, 0.3)",
                  color: "rgb(167, 152, 255)",
                  borderRadius: "7px",
                  width: "30px",
                  height: "30px",
                  fontSize: "20px",
                  pt: "4px",
                  textAlign: "center",
                  mb: "8px",
                }}
              >
                <AutorenewRoundedIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "secondary.main",
                  fontWeight: 500,
                }}
              >
                Repeat Purchase
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  $13k
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  <ArrowUpwardOutlinedIcon
                    sx={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      fontSize: "12px",
                      color: "rgb(44, 197, 189)",
                      background: "rgba(39, 206, 136, 0.2)",
                      borderRadius: "50%",
                      mb: "-3px",
                      mr: "5px",
                    }}
                  />
                  +20.4%
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 0, sm: "30px" },
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Paper sx={{ p: "15px 20px", margin: "15px 0px", flex: 1 }}>
              <Box
                sx={{
                  display: "inline-block",
                  background: "rgb(255, 107, 147, 0.3)",
                  color: "rgb(255, 107, 147)",
                  borderRadius: "7px",
                  width: "30px",
                  height: "30px",
                  fontSize: "20px",
                  pt: "4px",
                  textAlign: "center",
                  mb: "8px",
                }}
              >
                <PaidRoundedIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "secondary.main",
                  fontWeight: 500,
                }}
              >
                Average Order
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  $42k
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  <ArrowUpwardOutlinedIcon
                    sx={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      fontSize: "12px",
                      color: "rgb(44, 197, 189)",
                      background: "rgba(39, 206, 136, 0.2)",
                      borderRadius: "50%",
                      mb: "-3px",
                      mr: "5px",
                    }}
                  />
                  +10.23%
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{ p: "15px 20px", margin: "15px 0px", flex: 1 }}>
              <Box
                sx={{
                  display: "inline-block",
                  background: "rgb(255, 151, 119, 0.3)",
                  color: "rgb(255, 151, 119)",
                  borderRadius: "7px",
                  width: "30px",
                  height: "30px",
                  fontSize: "20px",
                  pt: "4px",
                  textAlign: "center",
                  mb: "8px",
                }}
              >
                <PeopleRoundedIcon />
              </Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "secondary.main",
                  fontWeight: 500,
                }}
              >
                New Customers
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  $689
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  <ArrowUpwardOutlinedIcon
                    sx={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      fontSize: "12px",
                      color: "rgb(44, 197, 189)",
                      background: "rgba(39, 206, 136, 0.2)",
                      borderRadius: "50%",
                      mb: "-3px",
                      mr: "5px",
                    }}
                  />
                  +10.23%
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/*  */}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "15px 0px",
          gap: "30px",
          flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
        }}
      >
        <Paper sx={{ flex: 1 }}>
          <Box>
            <Typography
              sx={{ fontWeight: 600, fontSize: "15px", pt: 4, pl: 2 }}
            >
              Earnings Report Month ​
            </Typography>
            <Box sx={{width:'100%'}}>
              <BarChart height={250} />
              </Box>
          </Box>
        </Paper>

        <Paper
          sx={{
            width: { xs: "100%", md: "280px", lg: "350px" },
            p: { xs: "20px", sm: "30px 20px 15px 20px" },
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600, ml: 2, mb: 3 }}>
            Total Sales
          </Typography>
          <IconButton
            sx={{
              background: "rgb(36, 153, 239)",
              "&:hover": { background: "rgb(36, 153, 239)" },
              color: "white",
            }}
          >
            <ShoppingBagOutlinedIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: "28px", fontWeight: 600, color: "primary.main", my:1 }}
          >
            $26,543
          </Typography>
          <Typography sx={{ fontSize: "13px",color: "rgba(39, 206, 136)", fontWeight: 500, my:2 }}>
            <ArrowUpwardOutlinedIcon
              sx={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                fontSize: "12px",
                color: "rgb(44, 197, 189)",
                background: "rgba(39, 206, 136, 0.2)",
                borderRadius: "50%",
                mb: "-3px",
                mr: "5px",
              }}
            />
            +10.23%
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 500, color: 'secondary.main', my:2 }}>Calculated in last 7 days</Typography>
            <Button sx={{textTransform:'capitalize', width: "100%"}} variant='contained'>View Full Report</Button>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "15px 0px",
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
            Recent Orders
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
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src="https://uko-react.vercel.app/static/products/black-keds.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                Nike airmax 170
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "secondary.main",
                }}
              >
                10 min ago
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "end",
                flex: 1,
              }}
            >
              $654
            </Typography>
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
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src="https://uko-react.vercel.app/static/products/bonsai.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                Cactus Plant
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "secondary.main",
                }}
              >
                10 min ago
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "end",
                flex: 1,
              }}
            >
              $654
            </Typography>
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
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src="https://uko-react.vercel.app/static/products/airbud.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                Minimal Pot
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "secondary.main",
                }}
              >
                10 min ago
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "end",
                flex: 1,
              }}
            >
              $654
            </Typography>
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
              style={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src="https://uko-react.vercel.app/static/products/shoe-2.png"
            />
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                Adidas Blaze
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "secondary.main",
                }}
              >
                10 min ago
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "end",
                flex: 1,
              }}
            >
              $654
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

const sales = () => {
  return (
    <Layout title={"Sales"}>
      <Prepare />
    </Layout>
  );
};

export default sales;
