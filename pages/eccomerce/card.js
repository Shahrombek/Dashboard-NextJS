import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changeProductNum } from "../../redux/actions/newsActions";
import Layout from "../Layout";

function Prepare() {
  const card = useSelector((state) => state.shop.card);
  const router = useRouter();

  const posNum = (item) => {
    item.num += 1;
    changeProductNum(item);
  };
  const negNum = (item) => {
    item.num -= 1;
    changeProductNum(item);
  };

  const subtotal = () => {
    var price = 0;
    card.map((item) => {
      price += item.num * item.price;
    });
    return price;
  };
  const present = subtotal() * 0.15;
  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} sx={{display: "flex", gap: '30px', flexDirection: 'column'}}>
          {card.length === 0 && (
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: '30px',
                flexDirection: { xs: "column", sm: "row"}
              }}
            >
              <Box sx={{mb:6, textAlign: {xs: "center", sm:'start'}}}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: {xs: '16px', lg:'20px'},
                    textTransform: "capitalize",
                    my:1
                  }}
                >
                  Make purchases from Uko Dashboard
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '13px',
                    color: 'text.secondary',
                    textTransform: "capitalize",
                    my:1
                  }}
                >
                  There is currently no product in your cart.
                </Typography>
                <Button
                  onClick={() => router.push("/eccomerce/shop")}
                  sx={{
                    background: "rgb(36, 153, 239)",
                    "&:hover": { background: "rgb(36, 153, 239)" },
                    color: "white",
                    textTransform: "capitalize",
                    py: "8px",
                  }}
                >
                  go to shop
                </Button>
              </Box>
              <img src="https://uko-react.vercel.app/static/illustration/payment-page.svg" />
            </Paper>
          )}
          {card.map((item, index) => {
            return (
              <Paper
              key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between !important",
                  p: {xs: '7px', sm:"15px"},
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                    // width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <img
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    src={item.img}
                    alt="alt"
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "13px", sm: "17px" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "13px", sm: "17px" },
                      }}
                    >
                      ${item.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: '11px', sm:"13px"},
                        fontWeight: 500,
                        color: "secondary.main",
                      }}
                    >
                      {item.info}
                    </Typography>
                  </Box>
                </Box>
                {item.num === 0 ? (
                  <Button
                    onClick={() => posNum(item)}
                    sx={{
                      background: "rgb(36, 153, 239)",
                      "&:hover": { background: "rgb(36, 153, 239)" },
                      color: "white",
                      textTransform: "capitalize",
                      p: "8px 16px",
                      mt: 2,
                    }}
                  >
                    Add to card
                  </Button>
                ) : (
                  <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
                    <Button
                      onClick={() => posNum(item)}
                      sx={{
                        width: "25px !important",
                        height: "25px !important",
                        borderRadius: "5px",
                        minWidth: "20px",
                        background: "rgb(148, 164, 196, 0.3)",
                        "&:hover": { background: "rgb(148, 164, 196, 0.3)" },
                        color: "grey !important",
                        fontSize: "20px",
                      }}
                    >
                      +
                    </Button>
                    <Typography
                      sx={{ fontWeight: 600, width: "10px", fontSize: "17px" }}
                    >
                      {item.num}
                    </Typography>
                    <Button
                      onClick={() => negNum(item)}
                      sx={{
                        width: "25px !important",
                        height: "25px !important",
                        borderRadius: "5px",
                        minWidth: "20px",
                        background: "rgb(148, 164, 196, 0.3)",
                        "&:hover": { background: "rgb(148, 164, 196, 0.3)" },
                        color: "grey !important",
                        fontSize: "20px",
                      }}
                    >
                      -
                    </Button>
                  </Box>
                )}
              </Paper>
            );
          })}
        </Grid>
        <Grid item xs={12} md={5}>
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
                <span style={{ color: "rgb(36, 153, 239)" }}>
                  ${subtotal() + present}
                </span>
              </Typography>
              <Button
                onClick={() => router.push("/eccomerce/checkout")}
                sx={{
                  background: "rgb(36, 153, 239)",
                  "&:hover": { background: "rgb(36, 153, 239)" },
                  color: "white",
                  textTransform: "capitalize",
                  width: "100%",
                  py: "8px",
                }}
              >
                Procced to payment
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

const card = () => {
  return (
    <Layout title={"Card"}>
      <Prepare />
    </Layout>
  );
};

export default card;
