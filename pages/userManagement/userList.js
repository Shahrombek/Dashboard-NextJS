import {
  Box,
  Paper,
  IconButton,
  Button,
  Grid,
  Typography,
  Divider,
  Pagination,
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
  let userGrid = useSelector((state) => state.user.userGrid);
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

  if (search) userGrid = [...searchUser];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearch(false);
  };
  const handleChangeSearch = (e) => {
    if (e.target.value.trim().length > 1) searchData();
    setSearchValue(e.target.value);
  };


  // Pagenation
  const currentOrders = userGrid;
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);
  var pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  if (userGrid.length >= 6) {
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    userGrid = currentOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  } else if (userGrid.length >= 1) {
    pageNumbers = 1;
  } else {
    pageNumbers = 0;
  }

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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 3,
          mt: 5,
          overflowX: "auto",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "text.secondary",
              ml: 3,
              minWidth: { xs: "160px" },
            }}
          >
            Name
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "text.secondary",
              textAlign: "center",
              minWidth: { xs: "150px", sm: "auto", md: "150px" },
            }}
          >
            Role
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "text.secondary",
              textAlign: "center",
              minWidth: { xs: "100px", sm: "auto", md: "100px" },
            }}
          >
            Company
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "text.secondary",
              textAlign: "center",
              mr: 2,
              minWidth: { xs: "100px", sm: "auto", md: "100px" },
            }}
          >
            Project
          </Typography>
        </Box>
        <Box
          sx={{ flex: 1, display: { xs: "block", sm: "none", md: "block" } }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "text.secondary",
              textAlign: "center",
              minWidth: { xs: "100px", sm: "auto", md: "100px" },
            }}
          >
            Verified
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {userGrid.map((item, index) => {
          return (
            <Grid key={index} item xs={12}>
              <Paper
                sx={{
                  p: "15px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  overflowX: "auto",
                }}
              >
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
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      {item.country}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1, textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 10px",
                      width: "150px",
                      background: "rgb(167, 152, 255)",
                      color: "white",
                      borderRadius: "15px",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {item.job}
                  </span>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "text.secondary",
                      textTransform: "capitalize",
                      textAlign: "center",
                      minWidth: { xs: "100px", sm: "auto", md: "100px" },
                    }}
                  >
                    {item.company}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "text.secondary",
                      textAlign: "center",
                      minWidth: { xs: "100px", sm: "auto", md: "100px" },
                    }}
                  >
                    Project X
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: { xs: "block", sm: "none", md: "block" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "text.secondary",
                      textTransform: "capitalize",
                      textAlign: "center",
                      minWidth: { xs: "100px", sm: "auto", md: "100px" },
                    }}
                  >
                    yes
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
        <Box
          sx={{
            width: '100%',
            display: "flex",
            justifyContent: "flex-end",
            alignItems: 'flex-end',
            my: 3,
          }}
        >
         {!search && <Pagination
            onChange={(e, page) => setCurrentPage(page)}
            variant="outlined"
            count={pageNumbers}
            sx={{ color: "rgb(36, 153, 239)" }}
          ></Pagination>}
        </Box>
    </Box>
  );
}

const userList = () => {
  return (
    <Layout title={"User List"}>
      <Prepare />
    </Layout>
  );
};

export default userList;
