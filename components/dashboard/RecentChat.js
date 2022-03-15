import { Avatar, Box, IconButton, Typography } from "@mui/material";
import {Chats} from '../../data/ProjectmanagementData';

const RecentChat = () => {
  return (
    <Box>
      {Chats.map((item) => {
        return (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: "15px 0px",
              pb:2,
              borderBottom: '1px solid rgb(148, 164, 196, 0.4)',
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0px" }}>
             <Avatar alt="Remy Sharp" src={item.img} />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}>
                {item.title} <br />
                <Typography
                  sx={{
                    display: "block",
                    color: "rgb(148, 164, 196)",
                    fontSize: "12px",
                  }}
                >
                  {item.info}
                </Typography>
              </Typography>
            </Box>
            <Typography sx={{ color: "rgb(148, 164, 196)", fontSize: "12px"}}> {item.time} </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecentChat;
