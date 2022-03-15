import { Box, IconButton, Typography } from '@mui/material'


const TodoTasks = (props) => {
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
                    m: "15px 0px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "0px" }}
                  >
                    <Box
                      sx={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "5px",
                        backgroundColor: item.boxColor,
                      }}
                    ></Box>
                    <Typography
                      sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}
                    >
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
                  <IconButton sx={{ color: "grey" }}> {item.icon} </IconButton>
                </Box>
              );
            })}
      </Box>
  )
}

export default TodoTasks;