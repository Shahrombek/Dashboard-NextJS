import {
  Box,
  Paper,
  IconButton,
  Button,
  Grid,
  Typography,
  Pagination,
} from "@mui/material";
import Layout from "../Layout";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { editInvoice, findUser, selectInvoice } from "../../redux/actions/newsActions";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

function Prepare() {
  const router = useRouter();
  let userGrid = useSelector((state) => state.invoice.userGrid);
  const searchUser = useSelector((state) => state.invoice.findUser);

  const [search, setSearch] = useState(false);
  // search functions
  const [searchValue, setSearchValue] = useState("");
  const searchData = () => {
    const findData = [];
    userGrid.map((item) => {
      if (item.billTo.toLowerCase().includes(searchValue.toLowerCase())) {
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

  const [allUser, setAllUser] = useState(3);


  const chooseInvoice = (item) => {
    userGrid.map((e) => {
        e.billTo === item.billTo ? e.change = true : e.change=false
    })
    selectInvoice(userGrid)
    router.push("/invoice/invoiceDetails")
  }

  const addNew = () => {
    const item = [];
    editInvoice(item)
    router.push("/invoice/addInvoice")
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
            placeholder="Find Invoice..."
          />
        </Paper>
        <Button
          onClick={() => addNew()}
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
          add new
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
            Client
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
              minWidth: { xs: "100px", sm: "auto", md: "100px" },
            }}
          >
            Date
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
            Amount
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
              ml: "-30px",
              minWidth: { xs: "100px", sm: "auto", md: "100px" },
            }}
          >
            Status
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {userGrid.map((item, index) => {
          return (
            index + 1 <= allUser && (
              <Grid key={index} item xs={12}>
                <Paper
                  onClick={() => chooseInvoice(item)}
                  sx={{
                    cursor: "pointer",
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
                  <Box sx={{ flex: 1, textAlign: "center" }}>
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
                      {item.billTo}
                    </Typography>
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
                      {item.date}
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
                      ${item.amount}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: 1,
                      display: { xs: "flex", sm: "none", md: "flex" },
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 10px",
                        width: "100px",
                        background: "rgb(253, 57, 109)",
                        color: "white",
                        borderRadius: "15px",
                        fontFamily: "Montserrat",
                        fontSize: "12px",
                        fontWeight: 500,
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                    >
                      {item.status}
                    </span>
                  </Box>
                </Paper>
              </Grid>
            )
          );
        })}
      </Grid>
      {!search && (
        <Box
          sx={{
            width: "100%",
            display: allUser === 3 ? "flex" : "none",
            justifyContent: "space-between",
            alignItems: "center",
            my: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            Showing 1-{allUser} of {userGrid.length} result
          </Typography>
          <Typography
            onClick={() => setAllUser(userGrid.length)}
            sx={{ fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
          >
            See All <ArrowRightAltRoundedIcon sx={{ mb: "-7px" }} />
          </Typography>
        </Box>
      )}
    </Box>
  );
}

const invoiceList = () => {
  return (
    <Layout title={"Invoice List"}>
      <Prepare />
    </Layout>
  );
};

export default invoiceList;
