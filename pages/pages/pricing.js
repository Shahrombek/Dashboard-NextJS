import { Box, Button, Checkbox, Divider, Grid, Paper, Table, Typography } from "@mui/material";
import Layout from "../Layout";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CreateTable from '../../components/dashboard/CreateTable'

// import {tablehead, rows} from "../../data/SaasData"

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Bandwidth', "100 GB", "1 TB", "Custom"),
    createData('Serverless Function Execution', "100 GB", "1,000 GB", "Custom"),
    createData('Serverless Function Execution Timeout', '5 seconds', '15 seconds', '30 seconds'),
    createData('Image Optimization', 1000, 5000, 'Custom'),
    createData('Multi-Region Serverless Functions', '', '', 'Custom'),
  ];


function Prepare() {
  return (
    <Box sx={{ padding: "30px", textAlign: "center" }}>
      <Box sx={{ mb: 6 }}>
        <Typography
          sx={{
            fontWeight: 700,
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            color: "rgb(29, 36, 56)",
          }}
        >
          A Great Experience is Priceless.
        </Typography>
        <Typography
          sx={{ fontWeight: 500, fontSize: "15px", color: "secondary.main" }}
        >
          Get iA better experience for developers creates a better experience
          for users.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{mb:10}}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ textAlign: "start" }}>
            <Box sx={{ p: "30px" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "19px", sm: "24px", md: "28px" },
                  color: "rgb(29, 36, 56)",
                }}
              >
                Hobby
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "secondary.main",
                }}
              >
                Free for non-commercial sites
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ p: "30px" }}>
              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                For non-commercial & hobby sites
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Deploy from CLI or personal git integrations
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Built-in CI/CD
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Previews for every git push
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Email support
              </Typography>
              </Box>
            
              <Button variant='contained' sx={{width: "100%", textTransform: "capitalize", py:1}}>
              Deploy Hobby Project &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ textAlign: "start" }}>
            <Box sx={{ p: "30px" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "19px", sm: "24px", md: "28px" },
                  color: "rgb(29, 36, 56)",
                }}
              >
                Professional
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "secondary.main",
                }}
              >
                $20/mo per member
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ p: "30px" }}>
              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                For non-commercial & hobby sites
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Deploy from CLI or personal git integrations
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Built-in CI/CD
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Previews for every git push
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Email support
              </Typography>
              </Box>
            
              <Button variant='contained' sx={{width: "100%", textTransform: "capitalize", py:1}}>
              Deploy Hobby Project &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ textAlign: "start" }}>
            <Box sx={{ p: "30px" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "19px", sm: "24px", md: "28px" },
                  color: "rgb(29, 36, 56)",
                }}
              >
                Enterprise
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "secondary.main",
                }}
              >
                Suited to your business
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ p: "30px" }}>
              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                For non-commercial & hobby sites
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Deploy from CLI or personal git integrations
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Built-in CI/CD
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
               Previews for every git push
              </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my:1}}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
               <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "secondary.main",
                }}
              >
                Email support
              </Typography>
              </Box>
            
              <Button variant='contained' sx={{width: "100%", textTransform: "capitalize", py:1}}>
              Deploy Hobby Project &nbsp; <ArrowForwardRoundedIcon fontSize='small'/>
            </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mb: 6 }}>
        <Typography
          sx={{
            fontWeight: 700,
            maxWidth: "800px",
            mx: "auto",
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            color: "rgb(29, 36, 56)",
          }}
        >
          Compare Plans
        </Typography>
        <Typography
          sx={{ fontWeight: 500, fontSize: "15px", color: "secondary.main" }}
        >
          A better experience for developers creates a better experience for users.
        </Typography>
      </Box>

      <TableContainer sx={{mb:3}}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: '18px', fontWeight: 600}}>Features</TableCell>
            <TableCell sx={{fontSize: '18px', fontWeight: 600, display: {xs:'none', md: 'table-cell'}}} align="right">Hobby</TableCell>
            <TableCell sx={{fontSize: '18px', fontWeight: 600, display: {xs:'none', md: 'table-cell'}}} align="right">Professional</TableCell>
            <TableCell sx={{fontSize: '18px', fontWeight: 600}} align="right">Enterprise</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: 'secondary.main', fontWeight: 500}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color: 'secondary.main', fontWeight: 500}} align="right">{row.calories}</TableCell>
              <TableCell sx={{color: 'secondary.main', fontWeight: 500, display: {xs:'none', md: 'table-cell'}}} align="right">{row.fat}</TableCell>
              <TableCell sx={{color: 'secondary.main', fontWeight: 500, display: {xs:'none', md: 'table-cell'}}} align="right">{row.carbs}</TableCell>
              <TableCell sx={{color: 'secondary.main', fontWeight: 500}} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>
  );
}

const pricing = () => {
  return (
    <Layout title={"Pricing"}>
      <Prepare />
    </Layout>
  );
};

export default pricing;
