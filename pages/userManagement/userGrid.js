import {
  Box,
  Paper,
  IconButton,
  Button,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import Layout from "../Layout";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { findUser } from "../../redux/actions/newsActions";

const bgImg = [
  "https://uko-react.vercel.app/static/cover/cover-1.png",
  "https://uko-react.vercel.app/static/cover/cover-3.png",
  "https://uko-react.vercel.app/static/cover/cover-4.png",
  "https://uko-react.vercel.app/static/cover/cover-5.png",
  "https://uko-react.vercel.app/static/cover/cover-6.png",
];
function Prepare() {
  const router = useRouter();
  var userGrid = useSelector((state) => state.user.userGrid);
  const searchUser = useSelector((state) => state.user.findUser);

  const [search, setSearch] = useState(false);
  // search functions
  const [searchValue, setSearchValue] = useState("");
  const searchData = () => {
    const findData = [];
    userGrid.map((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        findData.push(item);
      }
    });
    findUser(findData);
    setSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearch(false);
  };
  const handleChangeSearch = (e) => {
    if (e.target.value.trim().length > 1) searchData();
    setSearchValue(e.target.value);
  };

  if (search) userGrid = [...searchUser];
  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          mb: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: "30px",
        }}
      >
        <Paper
          component="form"
          onSubmit={(e) => handleSubmit(e)}
          sx={{
            p: "5px",
            display: "flex",
            width: { xs: "100%", sm: "300px" },
          }}
        >
          <IconButton type="submit">
            <SearchRoundedIcon sx={{ color: "secondary.main" }} />
          </IconButton>
          <input
            onChange={(e) => handleChangeSearch(e)}
            value={searchValue}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "10px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              minWidth: "20px",
            }}
            placeholder="Search user..."
          />
        </Paper>
        <Button
          onClick={() => router.push("/userManagement/addUser")}
          sx={{
            textTransform: "capitalize",
            width: { xs: "100%", sm: "auto" },
            fontSize: "14px",
            fontWeight: 500,
            color: "white",
            background: "rgb(36, 153, 239)",
            "&:hover": { background: "rgb(36, 153, 239)" },
            p: "12px 20px",
          }}
        >
          add new user
        </Button>
      </Box>

      <Grid container spacing={3}>
        {userGrid.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Paper
                sx={{ width: "100%", overflow: "hidden", borderRadius: "8px" }}
              >
                <img
                  style={{ width: "100%" }}
                  src={bgImg[Math.floor((Math.random() * 10) % 5)]}
                  alt={item.name}
                />
                <Box
                  sx={{
                    background: "rgb(229, 234, 242)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    textAlign: "center",
                    mt: "-35px",
                    mx: "auto",
                    border: "3px solid white !important",
                    position: "relative",
                    zIndex: "10",
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
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: 600,
                    mt: 2,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "text.secondary",
                  }}
                >
                  {item.job}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 2,
                  }}
                >
                  <IconButton>
                    <FacebookIcon sx={{ color: "#1976d2" }} />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon sx={{ color: "#64b5f6" }} />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon sx={{ color: "#e53935" }} />
                  </IconButton>
                  <IconButton>
                    <SportsBasketballIcon sx={{ color: "#ec407a" }} />
                  </IconButton>
                </Box>
                <Divider />
                <Box
                  sx={{
                    p: "15px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      121
                    </Typography>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      Post Avg.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      575
                    </Typography>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      Followers
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      632
                    </Typography>
                    <Typography
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      Following
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const userGrid = () => {
  return (
    <Layout title={"User Grid"}>
      <Prepare />
    </Layout>
  );
};

export default userGrid;
