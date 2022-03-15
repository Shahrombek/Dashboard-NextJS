import { Box, IconButton, Typography } from "@mui/material";
import { Activity } from "../../data/ProjectmanagementData";

const RecentActivity = () => {
  return (
    <Box>
      {Activity.map((item) => {
        return (
          <Box
            key={item.title}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: "15px 0px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0px" }}>
              <IconButton sx={{background: 'rgb(148, 164, 196)', "&:hover": {background: 'rgb(148, 164, 196)'}, color: 'white'}}>{item.icon}</IconButton>
              <Typography sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}>
                {item.title} <br />
                <Typography
                  sx={{
                    display: "block",
                    color: "grey",
                    fontSize: "12px",
                  }}
                >
                  {item.info}
                </Typography>
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecentActivity;
