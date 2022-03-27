import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import Layout from "../Layout";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useRouter } from "next/router";

function Prepare() {
  const router = useRouter();
  return (
    <Box sx={{ padding: "30px" }}>
      <Paper sx={{ width: "100%", p: "15px", textAlign: "center" }}>
        <IconButton
          sx={{
            mt: 6,
            mb: 4,
            width: "100px",
            height: "100px",
            background: "rgb(36, 153, 239)",
            "&:hover": { background: "rgb(36, 153, 239)" },
          }}
        >
          {" "}
          <CheckRoundedIcon
            sx={{ fontSize: "60px", color: "white", fontWeight: "bold" }}
          />{" "}
        </IconButton>
        <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: "12px" }}>
          Success
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: 500, color: "text.secondary" }}
        >
          thank you for shopping using Uko
        </Typography>
        <Button
          onClick={() => router.push("/eccomerce/checkout")}
          sx={{
            background: "rgb(36, 153, 239)",
            "&:hover": { background: "rgb(36, 153, 239)" },
            color: "white",
            textTransform: "capitalize",
            p: "8px 50px",
            fontWeight: 600,
            my: 4,
          }}
        >
          Back to order
        </Button>
      </Paper>
    </Box>
  );
}

const paymentSuccess = () => {
  return (
    <Layout title={"Payment Success"}>
      <Prepare />
    </Layout>
  );
};

export default paymentSuccess;
