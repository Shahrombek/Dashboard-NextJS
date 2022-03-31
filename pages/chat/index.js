import {
  IconButton,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import Layout from "../Layout";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Fragment, useEffect, useRef, useState } from "react";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import { getMsg } from "../../redux/actions/newsActions";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import {
  ChatData,
  ChatData2,
  ChatUsers,
} from "../../data/ProjectmanagementData";
import ChatTasks from "../../components/chat/ChatTasks";

function Prepare() {
  const mgsData = useSelector((state) => state.redux.messageData);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {anchor === "left" && (
        <Box sx={{ p: "15x" }}>
          <Paper
            sx={{
              width: "87%",
              display: "block",
              padding: "8px",
              m: "30px 20px 0px 20px",
            }}
          >
            <form
              onSubmit={(e) => handleSubmit(e)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  width: "100%",
                  order: 2,
                  border: "none",
                  outline: "none",
                  fontFamily: "Montserrat",
                }}
                placeholder="Find Conversation..."
              />
              <IconButton sx={{ order: 1 }}>
                <SearchRoundedIcon />
              </IconButton>
            </form>
          </Paper>

          <Box sx={{ height: "85vh", width: "100%" }}>
            <Box sx={{ p: 3, textAlign: "center" }}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://uko-react.vercel.app/static/avatar/067-man-14.svg"
                  sx={{
                    background: "rgb(36, 153, 239, 0.3)",
                    width: "75px",
                    height: "75px",
                  }}
                />
              </StyledBadge>
              <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 1 }}>
                Elon Mask
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  mb: "5px",
                  color: "secondary.main",
                }}
              >
                My Account
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Box sx={{ p: " 5px 15px" }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    py: "7px",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>
                    Recent Chats
                  </span>
                </Typography>
                <Box sx={{ height: "350px", overflowY: "auto", pr: 1 }}>
                  <ChatTasks Data={ChatUsers} />
                  <ChatTasks Data={ChatUsers} />
                  <ChatTasks Data={ChatUsers} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {anchor === "right" && <Paper
            sx={{
              width: "100%",
              height: "100vh",
              display: "block",
            }}
          >
            <Box sx={{ padding: "25px 30px", textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                  sx={{
                    background: "rgb(36, 153, 239, 0.3)",
                    width: "75px",
                    height: "75px",
                  }}
                />
              </Box>
              <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 2 }}>
                Tom Cruise
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  mb: "5px",
                  color: "secondary.main",
                }}
              >
                UI Designer
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: " 10px 15px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "7px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  Shared FIles
                </span>
                <span style={{ color: "rgb(255, 107, 147)", fontSize: "13px" }}>
                  See all
                </span>
              </Typography>
              <Box sx={{ height: "190px", overflowY: "auto", pr: 1 }}>
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: " 5px 15px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "7px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  Shared Links
                </span>
                <span style={{ color: "rgb(255, 107, 147)", fontSize: "13px" }}>
                  See all
                </span>
              </Typography>
              <Box sx={{ height: "180px", overflowY: "auto", pr: 1 }}>
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
              </Box>
            </Box>
          </Paper>}
    </Box>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Message

  const [msg, setMsg] = useState("");
  console.log(mgsData);
  const submitMsg = (e) => {
    e.preventDefault();
    console.log(msg);

    const data = {
      user: "shahrom",
      title: msg,
    };
    data.title.trim().length > 0 && getMsg(data);
    setMsg("");
  };
  const message = (e) => {
    setMsg(e.target.value);
  };

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const [file, setFile] = useState();
  const handleFileChange = (event) => {
    let input = event.target.files[0];
    console.log(input);
    if (!input) return;

    setFile(input);
  };

  console.log(file);

  // Avatar bage
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "rgb(36, 153, 239)",
      color: "#44b700",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "2px solid white",
        content: '""',
      },
    },
  }));

  return (
    <Box sx={{ padding: "30px" }}>
      <Box sx={{ width: "100%", display: "flex", gap: "30px" }} spacing={3}>
        <Box sx={{ flex: 2, display: { xs: "none", md: "block" } }}>
          <Box>
            <Paper
              sx={{
                width: "100%",
                display: "block",
                padding: "8px",
                mb: "30px",
              }}
            >
              <form
                onSubmit={(e) => handleSubmit(e)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{
                    width: "100%",
                    order: 2,
                    border: "none",
                    outline: "none",
                    fontFamily: "Montserrat",
                  }}
                  placeholder="Find Conversation..."
                />
                <IconButton sx={{ order: 1 }}>
                  <SearchRoundedIcon />
                </IconButton>
              </form>
            </Paper>

            <Paper sx={{ height: "515px", width: "100%" }}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://uko-react.vercel.app/static/avatar/067-man-14.svg"
                    sx={{
                      background: "rgb(36, 153, 239, 0.3)",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </StyledBadge>
                <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 1 }}>
                  Elon Mask
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 500,
                    mb: "5px",
                    color: "secondary.main",
                  }}
                >
                  My Account
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Box sx={{ p: " 5px 15px" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      py: "7px",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>
                      Recent Chats
                    </span>
                  </Typography>
                  <Box sx={{ height: "300px", overflowY: "auto", pr: 1 }}>
                    <ChatTasks Data={ChatUsers} />
                    <ChatTasks Data={ChatUsers} />
                    <ChatTasks Data={ChatUsers} />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ flex: 4 }}>
          <Paper
            sx={{
              width: "100%",
              height: {xs: '570px',sm:"600px"},
              display: "block",
            }}
          >
            <Box
              sx={{
                p: "30px 20px",
                display: "flex",
                align: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Avatar
                  sx={{ backgroundColor: "rgb(229, 234, 242)" }}
                  alt="Cindy Baker"
                  src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                />
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    Tom Cruise
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", color: "secondary.main" }}
                  >
                    Last seen 1 day ago
                  </Typography>
                </Box>
              </Box>
              <IconButton sx={{ color: "secondary.main" }}>
                <MoreHorizRoundedIcon />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -45,
                  left: 0,
                  background: "rgb(36, 153, 239)",
                  "&:hover": { background: "rgb(36, 153, 239)" },
                  display: {xs:'block', md:'none'}
                }}
              >
                <Fragment>
                  <Button
                    sx={{ color: "white", minWidth: "20px" }}
                    onClick={toggleDrawer("left", true)}
                  >
                    <KeyboardArrowLeftRoundedIcon />
                  </Button>
                  <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                  >
                    {list("left")}
                  </Drawer>
                </Fragment>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -45,
                  right: 0,
                  background: "rgb(36, 153, 239)",
                  "&:hover": { background: "rgb(36, 153, 239)" },
                  display: {xs:'block', lg:'none'}
                }}
              >
                <Fragment>
                  <Button
                    sx={{ color: "white", minWidth: "20px" }}
                    onClick={toggleDrawer("right", true)}
                  >
                    <ChevronRightRoundedIcon />
                  </Button>
                  <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                  >
                    {list("right")}
                  </Drawer>
                </Fragment>
              </Box>
            </Box>

            <Divider />
            <Box
              ref={divRef}
              sx={{
                p: "10px 20px",
                height: {xs: '400px', sm:"420px"},
                overflowY: "auto",
                backgroundPosition: "center",
                objectFit: "cover",
                background: "url()",
              }}
            >
              {mgsData.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      my: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: item.user === "shahrom" ? "end" : "start",
                    }}
                  >
                    <Typography
                      sx={{
                        p: "8px 15px",
                        background:
                          item.user === "shahrom" ? "#f5f5f5" : "#eeeeee",
                        display: "inline-block",
                        maxWidth: {xs: '85%', sm:"70%"},
                        fontSize: {xs: '13px', sm:"14px"},
                        borderRadius:
                          item.user === "shahrom"
                            ? "8px 8px 0 8px "
                            : "8px 8px 8px 0 ",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Divider />
            <Box
              sx={{
                p: {xs: "15px 20px", sm:"20px 30px"},
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "7px",
              }}
            >
              <input
                onChange={handleFileChange}
                type="file"
                id="file"
                accept="image/*"
              />
              <label htmlFor="file">
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid #bdbdbd",
                    fontSize: "18px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    color: "gray",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginTop: "-5px",
                  }}
                >
                  <LinkRoundedIcon />
                </span>
              </label>

              <form
                onSubmit={(e) => submitMsg(e)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "7px",
                  flexWrap: "nowrap"
                }}
              >
                <Box
                variant='input'
                component='input'
                  onChange={(e) => message(e)}
                  value={msg}
                  sx={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontFamily: "montserrat",
                    fontSize: "13px",
                    display:'inline-block',
                    maxWidth: {xs:'130px', sm: '800px'},
                  }}
                  placeholder="Write a message..."
                ></Box>

                <Box>
                <IconButton sx={{ p: "5px", color: "secondary.main" }}>
                  <SentimentSatisfiedAltOutlinedIcon />
                </IconButton>
                <IconButton sx={{ p: "5px", color: "secondary.main" }}>
                  <MicNoneOutlinedIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => submitMsg(e)}
                  sx={{
                    display: {xs:'none', sm: 'inline-flex'},
                    background: "rgb(36, 153, 239)",
                    "&:hover": { background: "rgb(36, 153, 239)" },
                    color: "white",
                    p: "5px",
                  }}
                >
                  <SendRoundedIcon />
                </IconButton>
                </Box>
              </form>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ flex: 2, display: { xs: "none", lg: "block" } }}>
          <Paper
            sx={{
              width: "100%",
              height: "600px",
              display: "block",
            }}
          >
            <Box sx={{ padding: "30px", textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                  sx={{
                    background: "rgb(36, 153, 239, 0.3)",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Box>
              <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 2 }}>
                Tom Cruise
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  mb: "5px",
                  color: "secondary.main",
                }}
              >
                UI Designer
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: " 10px 15px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "7px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  Shared FIles
                </span>
                <span style={{ color: "rgb(255, 107, 147)", fontSize: "13px" }}>
                  See all
                </span>
              </Typography>
              <Box sx={{ height: "155px", overflowY: "auto", pr: 1 }}>
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
                <ChatTasks Data={ChatData} />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: " 5px 15px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: "7px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  Shared Links
                </span>
                <span style={{ color: "rgb(255, 107, 147)", fontSize: "13px" }}>
                  See all
                </span>
              </Typography>
              <Box sx={{ height: "143px", overflowY: "auto", pr: 1 }}>
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
                <ChatTasks Data={ChatData2} />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

const chat = () => {
  return (
    <Layout title={"Chat"}>
      <Prepare />
    </Layout>
  );
};

export default chat;
