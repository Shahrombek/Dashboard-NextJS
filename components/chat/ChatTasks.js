import { Avatar, Box, IconButton, Typography } from "@mui/material";

const ChatTasks = (props) => {
  return (
    <Box>
      {props.Data.map((item) => {
        return (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: "8px 0px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0px" }}>
                {item.img && <Avatar sx={{background: 'rgba(36, 153, 239, 0.3)',my:'3px', mr:'7px', width: '35px', height: '35px'}} src={item.img} alt='users'/>}
             {item.iconZip && <IconButton sx={{color: 'rgb(148, 164, 196)'}}>{item.iconZip}</IconButton>}
              <Typography sx={{ fontSize: "12px", fontWeight: 500, }}>
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
            <Typography sx={{fontSize: '12px', fontWeight: 400, color: 'rgb(148, 164, 196)'}}>{item.icon}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ChatTasks;
