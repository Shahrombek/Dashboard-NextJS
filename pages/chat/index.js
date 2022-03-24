import {
  Grid,
  IconButton,
  Paper,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import Layout from "../Layout";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment, useEffect, useRef, useState } from "react";

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
import { ChatData, ChatData2, ChatUsers } from "../../data/ProjectmanagementData";
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <span>{anchor}</span>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
        top: -1,
        left: -1,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid rgb(36, 153, 239)",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box sx={{ padding: "30px" }}>
      <Box sx={{ width: "100%", display: "flex", gap: "30px" }} spacing={3}>
        <Box sx={{ flex: 2 }}>
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
                  <Box sx={{ height: "300px",overflowY: "auto", pr: 1 }}>
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
              height: "600px",
              display: "block",
            }}
          >
            <Box
              sx={{
                p: "30px 20px",
                display: "flex",
                align: "center",
                justifyContent: "space-between",
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
            </Box>
            <Divider />

            <Box
              ref={divRef}
              sx={{
                p: "10px 20px",
                height: "420px",
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
                        maxWidth: "70%",
                        fontSize: "14px",
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
                p: "20px 30px",
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
              <label for="file">
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
                  gap: "7px",
                }}
              >
                <input
                  onChange={(e) => message(e)}
                  value={msg}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontFamily: "montserrat",
                    fontSize: "13px",
                  }}
                  placeholder="Write a message..."
                />
                <IconButton sx={{ p: "5px", color: "secondary.main" }}>
                  <SentimentSatisfiedAltOutlinedIcon />
                </IconButton>
                <IconButton sx={{ p: "5px", color: "secondary.main" }}>
                  <MicNoneOutlinedIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => submitMsg(e)}
                  sx={{
                    background: "rgb(36, 153, 239)",
                    "&:hover": { background: "rgb(36, 153, 239)" },
                    color: "white",
                    p: "5px",
                  }}
                >
                  <SendRoundedIcon />
                </IconButton>
              </form>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ flex: 2 }}>
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

{
  /* <div>
{["left", "right"].map((anchor) => (
  <Fragment key={anchor}>
    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  </Fragment>
))}
</div> */
}


// UI Completed