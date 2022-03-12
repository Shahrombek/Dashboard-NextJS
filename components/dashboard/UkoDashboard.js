import { Box, Button, Paper, Typography } from "@mui/material";

const UkoDashboard = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        padding: { xs: "20px", sm: "30px" },
        borderRadius: "shape.borderRadius",
        background: 'background.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
          <Typography sx={{fontSize: {xs: '20px', sm: '24px', fontWeight: 600, color: 'textColor.main'}}}>Uko Dashboard & UI kit</Typography>
          <Typography sx={{fontSize: '13px', fontWeight: 400, color: 'textColor.normal'}}>Clean design & code for your next project.</Typography>
          <Button variant='contained' color='primary' sx={{mt: 4, p:'8px 20px', textTransform: 'capitalize', borderRadius: "shape.smallBorderRadius"}}>Buy Now</Button>
      </Box>
    </Paper>
  );
};

export default UkoDashboard;
