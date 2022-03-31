import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../Layout";

function Prepare() {
  const router = useRouter();
  const card = useSelector((state) => state.shop.card);


  const subtotal = () => {
    var price = 0;
    card.map((item) => {
      price += item.num * item.price;
    });
    return price;
  };
  const present = subtotal() * 0.15;


  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/eccomerce/purchaseConfirmation")
  }
  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={3} component={'form'} onSubmit={(e) => handleSubmit(e)}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
              mb: "30px",
            }}
          >
            <Box sx={{ flex: 2, width: "100%" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Card Number
              </Typography>
              <TextField required sx={{ width: "100%", mb: 3 }} variant="outlined" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Expiration
              </Typography>
              <TextField required sx={{ width: "100%", mb: 3 }} variant="outlined" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Secure Code
              </Typography>
              <TextField required sx={{ width: "100%", mb: 2 }} variant="outlined" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://uko-react.vercel.app/static/illustration/payment-page.svg"
                alt="img"
              />
            </Box>
          </Paper>
          <Paper
            sx={{
              p: "15px",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: { xs: "0", sm: "30px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Address
              </Typography>
              <TextField required sx={{ width: "100%", mb: 3 }} variant="outlined" />
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Mobile Number
              </Typography>
              <TextField required sx={{ width: "100%", mb: 3 }} variant="outlined" />
            </Box>
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 500, mb: 1 }}>
                Town/City
              </Typography>
              <TextField required sx={{ width: "100%", mb: 3 }} variant="outlined" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box sx={{ p: "15px" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "17px", mb: 2 }}>
                Order Summery
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  my: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Subtotal</span>
                <span>${subtotal()}</span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  my: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Discount</span>
                <span>15%</span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  my: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Shipping Cost</span>
                <span>${present}</span>
              </Typography>
            </Box>
            <Divider sx={{ my: 0 }} />
            <Box sx={{ p: "15px 15px 0 15px" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  my: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Total</span>
                <span style={{ color: "rgb(36, 153, 239)" }}>$ {subtotal() + present}</span>
              </Typography>
              <Button
                type='submit'
                // onClick={() => router.push("/eccomerce/purchaseConfirmation")}
                sx={{
                  background: "rgb(36, 153, 239)",
                  "&:hover": { background: "rgb(36, 153, 239)" },
                  color: "white",
                  textTransform: "capitalize",
                  width: "100%",
                  py: "8px",
                  fontWeight: 600,
                }}
              >
                Order
              </Button>
              <Box sx={{ textAlign: "center", mt: 6 }}>
                <img
                  src="https://uko-react.vercel.app/static/illustration/cart-page.svg"
                  alt="img"
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const checkout = () => {
  return (
    <Layout title={"Payment"}>
      <Prepare />
    </Layout>
  );
};

export default checkout;
