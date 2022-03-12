import {
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  ListItemButton,
  ListItemText,
  List,
  Collapse,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
// icons
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import CreateLink from "../components/CreateLink";

const AppBar = ({ children }) => {
  // console.log(props);
  const appBarItems = useSelector((state) => state.redux.appBar);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // state for link
  const [link, setLink] = useState("/");
  const preparingLink = (item) => {
    item.map((e, index) => {
      let word = "";
      for (let i of e) {
        if (i !== " ") {
          word = word + "" + i;
        }
      }
      item[index] = word.toLowerCase();
    });
    const ready = item.join("/");
    setLink(ready);
  };
  console.log(link);

  // Menu change
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("Saas");
  const [showAppBar, setShowAppBar] = useState("");
  const [openAppBar, setOpenAppBar] = useState(false);
  const changeCategory = (item) => {
    if (item.lists.length !== 0) {
      setLists(item.lists);
      setShowAppBar(item.title);
      setOpenAppBar(true);
    } else {
      setLists([]);
      setTitle(item.title);
      setOpenAppBar(false);
      setOpenAppBar("");
      // link
      preparingLink([item.title]);
    }
  };

  const changePage = (title, list) => {
    preparingLink([title, list]);
    setTitle(list);
  };

  // open list bar
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // Avatar
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "rgb(36, 153, 239)",
      color: "rgb(36, 153, 239)",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: -1,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.0)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Tabs
        className="scroll"
        sx={{
          maxWidth: "68px",
          minWidth: "68px",
          boxShadow: 2,
          maxHeight: "100vh",
          overflowY: "auto",
          display: "inline-block !important",
          position: "sticky",
          top: "0",
          left: "0",
          background: "rgba(255, 255, 255, 0.8)",
          pt: 9,
        }}
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >
        <Box
          sx={{
            width: "68px",
            height: "72px",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRight: "2px solid rgb(36, 153, 239)",
          }}
        >
          <img
            style={{ width: "48%", margin: "15px auto" }}
            src="https://uko-react.vercel.app/static/logo/logo.svg"
          />
        </Box>
        {appBarItems.map((item, index) => {
          return (
            <Tab
              key={index}
              className="tab"
              onClick={() => changeCategory(item)}
              sx={{
                maxWidth: "68px",
                minWidth: "68px",
                display: "block",
                cursor: "pointer",
                padding: "12px 0px",
                color: "secondary.main",
              }}
              label={<CreateLink href={link}>{item.icon}</CreateLink>}
            />
          );
        })}
      </Tabs>

      {/* Menu changeCategory */}
      {openAppBar && lists.length !== 0 && (
        <Box
          sx={{
            width: 270,
            transition: "0.5s",
            overflow: "hidden",
            position: "sticky",
            top: 0,
            left: "68px",
            height: "100vh",
            boxShadow: 4,
            p: 0,
            m: 0,
            background: "rgba(255, 255, 255, 0.5)",
            padding: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "16px" },
              fontWeight: "bold",
              mb: 3,
              mt: 1,
            }}
          >
            {showAppBar}
          </Typography>
          <Box
            onClick={handleClick}
            sx={{
              background: "transparent !important",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 0,
              color: open ? "rgb(36, 153, 239)" : "secondary.main",
            }}
          >
            <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
              {showAppBar}
            </Typography>
            {open ? <ExpandMoreOutlinedIcon /> : <ChevronRightOutlinedIcon />}
          </Box>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {lists.map((list, index) => {
                return (
                  <Typography
                    key={index}
                    sx={{
                      padding: "12px 0px",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                    onClick={() => changePage(showAppBar, list)}
                  >
                    <CreateLink href={link}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "5px",
                          height: "5px",
                          margin: "0px 10px 0px 5px",
                          backgroundColor: "rgb(36, 153, 239)",
                          borderRadius: "50%",
                        }}
                      ></span>
                      {list}
                    </CreateLink>
                  </Typography>
                );
              })}
            </List>
          </Collapse>
        </Box>
      )}

      {/*  Header Section  */}
      <Box sx={{ width: "100%" }} data-aos="fade-right">
        <Box
          sx={{
            width: "100%",
            height: "72px",
            boxShadow: 1,
            position: "sticky",
            top: 0,
            right: 0,
          }}
        >
          <header
            style={{
              width: "100%",
              height: "100%",
              backdropFilter: "blur(4px)",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => setOpenAppBar(!openAppBar)}
              sx={{ mr: 1 }}
            >
              <MenuRoundedIcon color="primary" sx={{ fontSize: 25 }} />
            </IconButton>
            <Box
              sx={{
                pr: { sx: 3, sm: 4 },
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                  },
                }}
              >
                {title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://uko-react.vercel.app/static/flags/usa.png"
                  sx={{ width: 20, height: 20, m: 1 }}
                />
                <IconButton>
                  <WbSunnyRoundedIcon sx={{ color: "rgb(247, 181, 59)" }} />
                  {/* <Brightness4RoundedIcon sx={{ color: "secondary.main" }} /> */}
                </IconButton>
                <IconButton
                  sx={{
                    display: {
                      xs: "none !important",
                      md: "inline-block !important",
                      width: "40px !important",
                      height: "40px !important",
                    },
                    color: "secondary.main",
                  }}
                >
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                <IconButton
                  sx={{
                    display: {
                      xs: "none !important",
                      md: "inline-block !important",
                      width: "40px !important",
                      height: "40px !important",
                    },
                    color: "secondary.main",
                  }}
                >
                  <AppsRoundedIcon />
                </IconButton>
                <IconButton
                  sx={{
                    display: {
                      xs: "none !important",
                      md: "inline-block !important",
                      width: "40px !important",
                      height: "40px !important",
                    },
                    color: "secondary.main",
                  }}
                >
                  <DashboardOutlinedIcon />
                </IconButton>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ cursor: "pointer", ml: 1 }}
                  />
                </StyledBadge>
              </Box>
            </Box>
          </header>
        </Box>

        {/* children section */}
        <Box sx={{ p: "20px 30px" }}> {children} </Box>
      </Box>

      <IconButton
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1,
          borderRadius: "50%",
          width: 45,
          height:45,
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: 'white',
        }}
      >
        <CreateLink href={"#"}>
          <ArrowUpwardOutlinedIcon />
        </CreateLink>
      </IconButton>
    </Box>
  );
};

export default AppBar;
