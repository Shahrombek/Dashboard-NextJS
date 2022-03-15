import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Layout from "../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";

function Prepare() {

    const [form, setForm] = useState();
    const addTodo = () => {

    }
  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: "15px", width: "100%", height: "600px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              To do
            </Typography>
            <Box sx={{position: 'sticky'}}>
              <Button onClick={() => addTodo()} variant="contained" sx={{ width: "100%", py: 1, my: 1 }}>
                <AddRoundedIcon />
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{ p: "20px 15px", width: "100%", height: "600px" }}
          ></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{ p: "20px 15px", width: "100%", height: "600px" }}
          ></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const kanban = () => {
  return (
    <Layout title={"Todo List"}>
      <Prepare />
    </Layout>
  );
};

export default kanban;
