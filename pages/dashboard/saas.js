import { Box } from "@mui/material";
import UkoDashboard from "../../components/dashboard/UkoDashboard";
import Layout from "../Layout";


function Prepare() {
  return (
    <Box>
      <UkoDashboard/>
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
