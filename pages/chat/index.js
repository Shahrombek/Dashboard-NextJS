import { Grid, IconButton, Paper } from "@mui/material";
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
import { Fragment, useState } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Prepare() {
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
                mb:'30px',
            }}
            >
              <form
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
            <Paper sx={{height:'515px', width: '100%'}}>
                  <Box sx={{p:3}}>
                      
                  </Box>
                  <Divider/>
                  <Box>asd</Box>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ flex: 4 }}>
          <Paper
            sx={{
              width: "100%",
              height: "600px",
              display: "block",
              padding: "30px",
            }}
          ></Paper>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Paper
            sx={{
              width: "100%",
              height: "600px",
              display: "block",
              padding: "30px",
            }}
          ></Paper>
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
