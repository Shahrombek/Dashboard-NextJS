import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import { editInvoice } from "../../redux/actions/newsActions";
import { useRouter } from "next/router";

function Prepare() {
  const router = useRouter();
  const selectInvoice = useSelector((state) => state.invoice.userGrid);
  console.log(selectInvoice);

  const editInvoiceItem = (item) => {
    editInvoice(item);
    router.push("/invoice/addInvoice");
  };
  return (
    <Box sx={{ padding: "30px" }}>
      <Paper sx={{ width: "100%", p: "30px" }}>
        {selectInvoice.map((item, index) => {
          return (
            item.change && (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                    Invoice Info
                  </Typography>
                  <IconButton
                    onClick={() => editInvoiceItem(item)}
                    sx={{ border: "1px solid rgb(36, 153, 239) !important" }}
                  >
                    <ModeOutlinedIcon sx={{ color: "rgb(36, 153, 239)" }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 3,
                    gap: "15px",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Order Number
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      item.orderNumber
                    </Typography>
                  </Box>
                  <Box sx={{ flex: { xs: 1, sm: 2 } }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Order Date
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 3,
                    gap: "15px",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Bill To
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      {item.billTo}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.billToAddress}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.billToNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: { xs: 1, sm: 2 } }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Bill from
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      {item.billFrom}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.billFromAddress}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                      }}
                    >
                      {item.billFromNumber}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 3,
                    gap: "15px",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Client
                    </Typography>
                    <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "7px",
                      minWidth: { xs: "160px" },
                    }}
                  >
                    <Box
                      sx={{
                        background: "rgb(229, 234, 242)",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        textAlign: "center",
                        mt:1
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          bacgroundPosition: "center",
                        }}
                        src={item.img}
                        alt={item.job}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        {item.billTo}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        {item.job}
                      </Typography>
                    </Box>
                  </Box>
                  </Box>
                  <Box sx={{height: '77px', flex: { xs: 1, sm: 2, display: "flex", alignItems: 'start', justifyContent: 'start', flexDirection: 'column'} }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 600,
                      }}
                    >
                      Address
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        fontWeight: 500,
                        mt:1
                      }}
                    >
                      {item.billFromAddress}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 3,
                    gap: "30px",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: 600, mb: 2 }}
                    >
                      Amount
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Subtotal</span>
                      <span>$428.00</span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Discount{" "}
                        <span style={{ color: "grey" }}>(BLACKFRIDAY)</span>{" "}
                      </span>
                      <span>$428.00</span>
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>VAT</span>
                      <span>$20.00</span>
                    </Typography>
                    <Divider />
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        my: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Total</span>
                      <span>$20.00</span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 500,
                        my: 1,
                        mb:2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Status</span>
                      <span>{item.status}</span>
                    </Typography>
                    <Box sx={{ display: "flex", gap: "15px" }}>
                      <Button
                      onClick={() => window.print()}
                        sx={{
                          textTransform: "capitalize",
                          width: { xs: "100%", sm: "auto" },
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "white",
                          background: "rgb(36, 153, 239)",
                          "&:hover": { background: "rgb(36, 153, 239)" },
                          p: { xs: "7px 0px", sm: "7px 20px" },
                        }}
                      >
                        print invoice
                      </Button>
                      <Button
                        onClick={() => editInvoiceItem(item)}
                        sx={{
                          textTransform: "capitalize",
                          width: { xs: "100%", sm: "auto" },
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "white",
                          background: "rgb(255, 107, 147)",
                          "&:hover": { background: "rgb(255, 107, 147)" },
                          p: { xs: "7px 0px", sm: "7px 20px" },
                        }}
                      >
                        edit
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ flex: { xs: 0, md: 2 } }}></Box>
                </Box>
              </Box>
            )
          );
        })}
      </Paper>
    </Box>
  );
}

const invoiceDetails = () => {
  return (
    <Layout title={"Invoice Details"}>
      <Prepare />
    </Layout>
  );
};

export default invoiceDetails;
