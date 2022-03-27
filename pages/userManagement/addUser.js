import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Switch,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../Layout";
import { useState } from "react";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { addNewUser } from "../../redux/actions/newsActions";

function Prepare() {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.img = createObjectURL;
    addNewUser(data)
    router.push('/userManagement/userGrid');
  };

  return (
    <Box sx={{ padding: "30px" }}>
      <Paper sx={{ width: "100%", p: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                width: "100%",
                p: "30px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: createObjectURL !== null ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    backgroundPosition: "center",
                  }}
                  src={createObjectURL}
                />
              </Box>
              <input
                type="file"
                id="file"
                name="myImage"
                onChange={uploadToClient}
              />
              <label
                htmlFor="file"
                style={{
                  display: createObjectURL === null ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "rgb(148, 164, 196, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "3px solid white",
                      background: "rgb(148, 164, 196)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PhotoCameraRoundedIcon sx={{ color: "white" }} />
                  </span>
                </span>
              </label>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "text.secondary",
                  textAlign: "center",
                  maxWidth: { xs: "85%", lg: "60%" },
                  my: 2,
                }}
              >
                Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
              </Typography>

              <Box
                sx={{ px: { xs: "10px", sm: "50px", md: "0px", lg: "40px" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    my: 1,
                    mt: 5,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Public Profile
                  </Typography>
                  <Switch defaultChecked />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Banned
                  </Typography>
                  <Switch defaultChecked />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "text.secondary",
                    textAlign: "start",
                    width: "100%",
                    mt: "-7px",
                  }}
                >
                  Apply disable account
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Email Verified
                  </Typography>
                  <Switch defaultChecked />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "text.secondary",
                    textAlign: "start",
                    width: "100%",
                    mt: "-7px",
                  }}
                >
                  Disabling this will automatically send the user a verification
                  email
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                width: "100%",
                p: "24px",
              }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ fontSize: "14px !important" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "column", sm: "row" },
                    mb: "24px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Full Name"
                    sx={{ fontSize: "14px !important" }}
                    {...register("name", {
                      required: true,
                    })}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    sx={{ fontSize: "14px !important" }}
                    {...register("Email", {
                      required: true,
                    })}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "column", sm: "row" },
                    mb: "24px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    type="number"
                    sx={{ fontSize: "14px !important" }}
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  <TextField
                    fullWidth
                    placeholder="Country"
                    sx={{ fontSize: "14px !important" }}
                    {...register("country", {
                      required: true,
                    })}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "column", sm: "row" },
                    mb: "24px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="State/Region"
                    sx={{ fontSize: "14px !important" }}
                    {...register("region", {
                      required: true,
                    })}
                  />
                  <TextField
                    fullWidth
                    placeholder="Company"
                    sx={{ fontSize: "14px !important" }}
                    {...register("company", {
                      required: true,
                    })}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "column", sm: "row" },
                    mb: "24px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Address"
                    style={{ fontSize: "14px !important" }}
                    {...register("adress", {
                      required: true,
                    })}
                  />
                  <TextField
                    fullWidth
                    placeholder="Job"
                    sx={{ fontSize: "14px !important" }}
                    {...register("job", {
                      required: true,
                    })}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "24px",
                    flexDirection: { xs: "column", sm: "row" },
                    mb: "24px",
                  }}
                >
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="About"
                    style={{
                      width: "100%",
                      fontFamily: "Montserrat",
                      borderRadius: "5px",
                      padding: "15px",
                      borderColor: "rgb(0,0,0,0.2)",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                    {...register("about", {
                      required: true,
                    })}
                  />
                </Box>
                <Button
                type='submit'
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "white",
                    background: 'rgb(36, 153, 239)',
                    '&:hover':{background: 'rgb(36, 153, 239)'},
                    p:'8px 20px'
                  }}
                >
                  create user
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

const adduser = () => {
  return (
    <Layout title={"Add User"}>
      <Prepare />
    </Layout>
  );
};

export default adduser;
