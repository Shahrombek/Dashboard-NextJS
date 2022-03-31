import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../Layout";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import PhotoFilterRoundedIcon from "@mui/icons-material/PhotoFilterRounded";
import { addInvoise } from "../../redux/actions/newsActions";
import { useSelector } from "react-redux";

function Prepare() {
  const router = useRouter();
  const invoice = useSelector((state) => state.invoice);
  const invoiceData = invoice.userGrid;
  var editItemInvoice = invoice.editInvoice;

  console.log(editItemInvoice);

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...editItemInvoice,
    },
  });
  const onSubmit = (data) => {
    console.log(data.id);
    if (!data.id) {
      data.id = invoiceData.length;
    }
    data.img = createObjectURL;
    data.amount = 300 + Math.floor(Math.random() * 4) * 100;
    data.status = "Unpaid";
    addInvoise(data);
    router.push("/invoice/invoiceList");
  };

  // radios
  const [value, setValues] = useState("Pending");

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  return (
    <Box sx={{ padding: "30px" }}>
      <Paper sx={{ p: "30px" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          Order Status
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ order: { xs: 2, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Pending"
                  control={<Radio />}
                  label="Pending"
                />
                <FormControlLabel
                  value="Processing"
                  control={<Radio />}
                  label="Processing"
                />
                <FormControlLabel
                  value="Delivered"
                  control={<Radio />}
                  label="Delivered"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                order: { xs: 1, sm: 2 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                onClick={() => router.push("/invoice/invoiceList")}
                sx={{
                  flex: { xs: 1, sm: "auto" },
                  textTransform: "capitalize",
                  p: "8px 50px",
                  fontSize: "13px",
                  fontWeight: "500",
                  border: "1px solid rgb(36, 153, 239, 0.5)",
                }}
              >
                cancel
              </Button>
              <Button
                type="submit"
                sx={{
                  flex: { xs: 1, sm: "auto" },
                  textTransform: "capitalize",
                  p: "8px 50px",
                  fontSize: "13px",
                  fontWeight: "500",
                  background: "rgb(36, 153, 239)",
                  "&:hover": { background: "rgb(36, 153, 239)" },
                  color: "white",
                }}
              >
                save
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 3,
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Your Image
              </Typography>
              <input
                type="file"
                id="file"
                name="myImage"
                onChange={uploadToClient}
              />
              <label
                htmlFor="file"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    height: "56px",
                    borderRadius: "4px",
                    background: "rgb(229, 234, 242)",
                    cursor: "pointer",
                    color: "rgb(148, 164, 196)",
                    fontWeight: 400,
                  }}
                >
                  {createObjectURL === null ? (
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AddPhotoAlternateOutlinedIcon />
                      <span
                        style={{ fontFamily: "Montserrat", fontWeight: 400 }}
                      >
                        Choose a photo
                      </span>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoFilterRoundedIcon />
                      <span
                        style={{ fontFamily: "Montserrat", fontWeight: 400 }}
                      >
                        Photo selected
                      </span>
                    </Box>
                  )}
                </span>
              </label>
            </Box>
            <Box sx={{ flex: { xs: 1, md: 2 }, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Your Job
              </Typography>
              <TextField
                sx={{ width: { xs: "100%", md: "50%" } }}
                id="outlined-basic"
                variant="outlined"
                {...register("job", { required: true })}
              />
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 3,
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Order Number
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                variant="outlined"
                placeholder="ab3e-022d-21b6-9107"
                {...register("orderNumber", { required: true })}
              />
            </Box>
            <Box sx={{ flex: { xs: 1, md: 2 }, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Order Date
              </Typography>
              <TextField
                sx={{ width: { xs: "100%", md: "50%" } }}
                id="outlined-basic"
                variant="outlined"
                placeholder="03/10/2022"
                {...register("date", { required: true })}
              />
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 3,
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Bill To
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                variant="outlined"
                {...register("billTo", { required: true })}
              />
            </Box>
            <Box sx={{ flex: { xs: 1, md: 2, width: "100%" } }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Bill From
              </Typography>
              <TextField
                sx={{ width: { xs: "100%", md: "50%" } }}
                id="outlined-basic"
                variant="outlined"
                {...register("billFrom", { required: true })}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 3,
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Bill To Address
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                variant="outlined"
                {...register("billToAddress", { required: true })}
              />
            </Box>
            <Box sx={{ flex: { xs: 1, md: 2 }, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Bill From Address
              </Typography>
              <TextField
                sx={{ width: { xs: "100%", md: "50%" } }}
                id="outlined-basic"
                variant="outlined"
                {...register("billFromAddress", { required: true })}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 3,
              gap: "30px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Phone Number
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                variant="outlined"
                {...register("billToNumber", { required: true })}
              />
            </Box>
            <Box sx={{ flex: { xs: 1, md: 2 }, width: "100%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                Phone Number
              </Typography>
              <TextField
                sx={{ width: { xs: "100%", md: "50%" } }}
                id="outlined-basic"
                variant="outlined"
                {...register("billFromNumber", { required: true })}
              />
            </Box>
          </Box>
          <Divider />
          <Box sx={{ my: 3 }}>
            <Button
              sx={{
                textTransform: "capitalize",
                p: "8px 30px",
                fontSize: "13px",
                fontWeight: "500",
                background: "rgb(36, 153, 239)",
                "&:hover": { background: "rgb(36, 153, 239)" },
                color: "white",
              }}
            >
              add new item
            </Button>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", alignItems: "center", my: 3, gap: "30px" }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600, mb: 2 }}>
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
                  Discount <span style={{ color: "grey" }}>(BLACKFRIDAY)</span>{" "}
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
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Total</span>
                <span>$20.00</span>
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: 0, md: 2 } }}></Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

const addInvoice = () => {
  return (
    <Layout title={"Add Invoice"}>
      <Prepare />
    </Layout>
  );
};

export default addInvoice;
