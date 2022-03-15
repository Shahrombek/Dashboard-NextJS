import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";

const UkoDashboard = (props) => {
  return (
    <Paper
      sx={{
        width: "100%",
        padding: { xs: "20px", sm: "30px 40px" },
        borderRadius: "shape.borderRadius",
        background: "background.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", sm: "nowrap" },
        m: '15px 0px',
      }}
    >
      <Box
        sx={{
          order: { xs: 2, sm: 1 },
          maxWidth: { xs: "300px", sm: "auto" },
          m: { xs: "0 auto", sm: "0" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "24px",
              fontWeight: 600,
              color: "text.primary",
            },
          }}
        >
          Uko Dashboard & UI kit
        </Typography>
        <Typography
          sx={{ fontSize: "13px", fontWeight: 400, color: "text.secondary" }}
        >
          Clean design & code for your next project.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            p: "8px 20px",
            textTransform: "capitalize",
            borderRadius: "shape.smallBorderRadius",
          }}
        >
          Buy Now
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
          style={{ width: "100%"}}
          src={props.src}
        />
      </Box>
    </Paper>
  );
};

export default UkoDashboard;
