import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  List,
  Pagination,
  Slider,
} from "@mui/material";
import Layout from "../Layout";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  addProduct,
  findProduct,
  selCategory,
  selSort,
} from "../../redux/actions/newsActions";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useRouter } from "next/router";

function valuetext(value) {
  return `$ ${value}`;
}

function Prepare() {
  const router = useRouter();
  const shop = useSelector((state) => state.shop);
  const categoriy = shop.categoriy;
  const sort = shop.sort;
  const categories = Object.entries(shop.categories);
  const searchPro = shop.searchPro;

  const selectCategory = (item) => {
    selCategory(item);
  };
  const selectSort = (item) => {
    selSort(item);
  };

  //////////////////////////////////////////////
  let data = [];
  var c = "";
  categoriy.map((item) => {
    item.select &&
      categories.map((el) => {
        if (item.name === el[0]) {
          c = item.name;
          data = el[1];
        }
      });
  });
  console.log(data);
  //////////////////////////////////////////////
  const [search, setSearch] = useState(false);

  // search functions
  const [searchValue, setSearchValue] = useState("");
  const searchData = () => {
    const findData = [];
    data.map((item) => {
      console.log(item.title);
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        console.log(item.title);
        findData.push(item);
      }
    });
    findProduct(findData);
    setSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearch(false);
  };
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.trim().length >= 1) searchData();
  };

  // pagenation
  const currentOrders = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(6);
  var pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  if (data.length >= 6) {
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    data = currentOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  } else if (data.length >= 1) {
    pageNumbers = 1;
  } else {
    pageNumbers = 0;
  }
  console.log(data);

  const [value, setValue] = useState([1, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // add to card function
  const addToCard = (item) => {
    item.num = 1;
    !item.incard && addProduct(item);
    item.incard = true;
  };

  if (search) data = [...searchPro];
  return (
    <Box sx={{ padding: "10px 30px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "30px" },
        }}
      >
        <Paper
          component="form"
          onSubmit={(e) => handleSubmit(e)}
          sx={{
            flex: 4,
            mb: "30px",
            p: "5px",
            display: "flex",
            order: { xs: 2, md: 1 },
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
            placeholder="Find Produncts"
          />
        </Paper>
        <Typography
          sx={{
            flex: 13,
            fontSize: "22px",
            fontWeight: 600,
            mt: { xs: "0", md: "10px" },
            mb: { xs: "30px", md: "0" },
            order: { xs: 1, md: 2 },
          }}
        >
          Uko Ecommerce
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ width: "100%", p: "15px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1 }}>
              Categories
            </Typography>
            <List disablePadding>
              {categoriy.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      onClick={() => selectCategory(item)}
                      sx={{
                        padding: "7px 0px",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: item.select ? "primary.main" : "text.secondary",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "7px",
                          height: "7px",
                          margin: "0px 10px 0px 5px",
                          backgroundColor: item.select
                            ? "rgb(36, 153, 239)"
                            : "rgb(229, 234, 242)",
                          borderRadius: "50%",
                        }}
                      ></span>
                      {item.name}
                    </Typography>
                    <span
                      style={{
                        display: "inline-block",
                        width: "40px",
                        height: "20px",
                        borderRadius: "15px",
                        textAlign: "center",
                        color: "rgb(148, 164, 196)",
                        backgroundColor: "rgb(229, 234, 242)",
                        fontSize: "15px",
                      }}
                    >
                      {item.num}
                    </span>
                  </Box>
                );
              })}
            </List>

            <Typography
              sx={{ fontSize: "14px", fontWeight: 600, mb: 1, mt: 2 }}
            >
              Sort By
            </Typography>
            <List disablePadding>
              {sort.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    onClick={() => selectSort(item)}
                    sx={{
                      padding: "7px 0px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: item.select ? "primary.main" : "text.secondary",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "7px",
                        height: "7px",
                        margin: "0px 10px 0px 5px",
                        backgroundColor: item.select
                          ? "rgb(36, 153, 239)"
                          : "rgb(229, 234, 242)",
                        borderRadius: "50%",
                      }}
                    ></span>
                    {item.name}
                  </Typography>
                );
              })}
            </List>

            <Typography
              sx={{ fontSize: "14px", fontWeight: 600, mb: 1, mt: 2 }}
            >
              Price Range
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "text.secondary",
              }}
            >
              <span>Min</span>
              <span>Max</span>
            </Typography>
            <Button
              onClick={() => router.push("/eccomerce/card")}
              sx={{
                width: "100%",
                background: "rgb(36, 153, 239)",
                "&:hover": { background: "rgb(36, 153, 239)" },
                color: "white",
                textTransform: "capitalize",
                fontWeight: 600,
                py: 1,
                mt: "30px",
              }}
            >
              view card
              <ShoppingCartRoundedIcon sx={{ fontSize: "18px", mx: 1 }} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper sx={{ width: "100%", p: "15px" }}>
            <Grid container spacing={3} sx={{ minHeight: !search && "550px !important" }}>
              {data.map((e, i) => {
                return (
                  <Grid item key={i} lg={4} sm={6} xs={12}>
                    <Paper
                      sx={{
                        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          maxHeight: {
                            xs: "260px !important",
                            sm: "160px !important",
                          },
                          overflow: "hidden",
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={e.img}
                          alt={e.info}
                        />
                      </Box>
                      <Box sx={{ p: "8px 7px" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "14px", fontWeight: 600 }}
                          >
                            {e.title}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <StarIcon sx={{ color: "yellow" }} />
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "rgb(148, 164, 196)",
                              }}
                            >
                              4.5
                            </span>
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {e.info}
                        </Typography>
                        <Box
                          sx={{
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "18px", fontWeight: 700 }}
                          >
                            ${e.price}
                          </Typography>
                          <Box>
                            <IconButton
                              sx={{
                                width: "35px",
                                height: "35px",
                                mr: "5px",
                                color: "#f44336",
                                background: "#ffebee",
                                "&:hover": { background: "#ffebee" },
                              }}
                            >
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => addToCard(e)}
                              sx={{
                                width: "35px",
                                height: "35px",
                                mr: "5px",
                                color: "white",
                                background: "rgb(36, 153, 239)",
                                "&:hover": {
                                  background: "rgb(36, 153, 239)",
                                },
                              }}
                            >
                              {!e.incard ? (
                                <AddRoundedIcon />
                              ) : (
                                <CheckRoundedIcon />
                              )}
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 1,
                mt: { xs: 3, lg: 1 },
              }}
            >
             {!search && <Pagination
            onChange={(e, page) => setCurrentPage(page)}
            variant="outlined"
            count={pageNumbers}
            sx={{ color: "rgb(36, 153, 239)" }}
          ></Pagination>}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const shop = () => {
  return (
    <Layout title={"Shop"}>
      <Prepare />
    </Layout>
  );
};

export default shop;
