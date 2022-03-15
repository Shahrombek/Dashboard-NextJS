import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Layout from "../Layout";
import { useRouter } from "next/router";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// chart
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TodoTasks from "../../components/dashboard/TodoTasks";
import { SmallData } from "../../data/ProjectmanagementData";
import RecentActivity from "../../components/dashboard/RecentActivity";
import RecentChat from "../../components/dashboard/RecentChat";

function Prepare() {
  const percentage = 75;
  const router = useRouter();

  return (
    <Box
      sx={{ p: "0 30px", display: "flex", alignItems: "start", justifyContent: 'start', gap: {xs: '0', lg:"30px"}, flexDirection: {xs: 'column', lg: 'row'}}}
    >
      <Box sx={{ flex: 2 }}>
        <Paper sx={{p: '30px 0px 0px 0px'}}>
          <Box sx={{ p: "0px 30px" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: 600,}}>
              Progress
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", my: 2,  gap: '30px',flexDirection: {xs:'column', sm:'row'}}}
            >
              <Paper
                sx={{
                  flex: 1,
                  p: "15px",
                  boxShadow: "rgb(0 0 0 / 7%) 0px 1px 21px 2px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgb(211, 245, 254)",
                      padding: "3px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    Web Design
                  </span>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500, py: 1 }}>
                  Membuat konsep ilustrasi untuk halaman homepage dan about us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    textAlign: "end",
                    mt: 1,
                  }}
                >
                  32%
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    height: "4px",
                    borderRadius: "5px",
                    background: "rgb(229, 234, 242)",
                    my: "5px",
                    mb: 2,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "32%",
                      height: "100%",
                      borderRadius: "5px",
                      background: "rgb(36, 153, 239)",
                    }}
                  ></span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AvatarGroup total={2}>
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Remy Sharp"
                      src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                    />
                  </AvatarGroup>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      color: "rgb(148, 164, 196)",
                      backgroundColor: "rgb(229, 234, 242)",
                    }}
                  >
                    3 Weeks Left
                  </span>
                </Box>
              </Paper>

              <Paper
                sx={{
                  flex: 1,
                  p: "15px",
                  boxShadow: "rgb(0 0 0 / 7%) 0px 1px 21px 2px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgb(211, 245, 254)",
                      padding: "3px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    Web Design
                  </span>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500, py: 1 }}>
                  Membuat konsep ilustrasi untuk halaman homepage dan about us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    textAlign: "end",
                    mt: 1,
                  }}
                >
                  32%
                </Typography>
                <Typography
                  sx={{
                    width: "100%",
                    height: "4px",
                    borderRadius: "5px",
                    background: "rgb(229, 234, 242)",
                    my: "5px",
                    mb: 2,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "32%",
                      height: "100%",
                      borderRadius: "5px",
                      background: "rgb(36, 153, 239)",
                    }}
                  ></span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AvatarGroup total={2}>
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Remy Sharp"
                      src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                    />
                  </AvatarGroup>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      color: "rgb(148, 164, 196)",
                      backgroundColor: "rgb(229, 234, 242)",
                    }}
                  >
                    3 Weeks Left
                  </span>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Divider />

          <Box sx={{ p: "20px 30px" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
              Projects
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: '30px',flexDirection: {xs:'column', sm:'row'}, my: 2 }}
            >
              <Paper
                sx={{
                  flex: 1,
                  p: "15px",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "4px" }}
                  src="https://uko-react.vercel.app/static/thumbnail/thumbnail-1.png"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  Project Nightfall
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    py: 1,
                    color: "secondary.main",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AvatarGroup total={3}>
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Remy Sharp"
                      src="https://uko-react.vercel.app/static/avatar/010-girl-1.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src="https://uko-react.vercel.app/static/avatar/011-man-2.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src=""
                    />
                  </AvatarGroup>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      color: "rgb(148, 164, 196)",
                      backgroundColor: "rgb(229, 234, 242)",
                    }}
                  >
                    3 Weeks Left
                  </span>
                </Box>
              </Paper>

              <Paper
                sx={{
                  flex: 1,
                  p: "15px",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "4px" }}
                  src="https://uko-react.vercel.app/static/thumbnail/thumbnail-2.png"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  Project Nightfall
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    py: 1,
                    color: "secondary.main",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AvatarGroup total={3}>
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Remy Sharp"
                      src="https://uko-react.vercel.app/static/avatar/013-woman-3.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src="https://uko-react.vercel.app/static/avatar/012-woman-2.svg"
                    />
                    <Avatar
                      sx={{ background: "rgb(229, 234, 242)" }}
                      alt="Travis Howard"
                      src=""
                    />
                  </AvatarGroup>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      color: "rgb(148, 164, 196)",
                      backgroundColor: "rgb(229, 234, 242)",
                    }}
                  >
                    3 Weeks Left
                  </span>
                </Box>
              </Paper>
            </Box>
          </Box>

          <Box sx={{ width: "100%", pb: 4, textAlign: "center" }}>
            <Button variant="contained" sx={{}}>
              Load More
            </Button>
          </Box>
          <Divider />

          <Box sx={{ p: "20px 30px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, textAlign: {xs: "center", sm: 'start'} }}>
              Teams
            </Typography>
            <Box sx={{ display: "flex", gap: {xs: 0, sm:"30px"},flexDirection: {xs:'column', sm:'row'}, alignItems: "center", my: 2, mb: 3 }}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  mb:{xs: 2, sm: 0} 
                }}
              >
                <Typography sx={{ fontSize: "14px",width: "100%", fontWeight: 600, mb: 1, textAlign: {xs: "center", sm: 'start'} }}>
                  Discord Nitro
                </Typography>
                <AvatarGroup total={4}>
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Remy Sharp"
                    src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/003-boy.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/005-man-1.svg"
                  />
                </AvatarGroup>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontSize: "14px",width: "100%", fontWeight: 600, mb: 1, textAlign: {xs: "center", sm: 'start'} }}>
                  Github
                </Typography>
                <AvatarGroup total={4}>
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Remy Sharp"
                    src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/003-boy.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/005-man-1.svg"
                  />
                </AvatarGroup>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: {xs: 0, sm:"30px"},flexDirection: {xs:'column', sm:'row'}, alignItems: "center", my: 2 }}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  mb:{xs: 2, sm: 0} 
                }}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1,width: "100%", textAlign: {xs: "center", sm: 'start'} }}>
                  Stack Over
                </Typography>
                <AvatarGroup total={4}>
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Remy Sharp"
                    src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/003-boy.svg"
                  />
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Travis Howard"
                    src="https://uko-react.vercel.app/static/avatar/005-man-1.svg"
                  />
                </AvatarGroup>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, width: "100%", textAlign: {xs: "center", sm: 'start'} }}>
                  Create a new team
                </Typography>
                <AvatarGroup total={1}>
                  <Avatar
                    sx={{ background: "rgb(229, 234, 242)" }}
                    alt="Remy Sharp"
                    src=""
                  />
                </AvatarGroup>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* progress */}
        <Paper sx={{ my: "30px" }}>
          <Box sx={{ p: "20px 20px", display: "flex", alignItems: "center", flexDirection: {xs: 'column', sm: 'row'}}}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 600, width: "100%", pl:{xs:5, sm: 2} }}>
                Tasks
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Design <br />
                  <Typography
                    sx={{
                      display: "block",
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    Completed
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Development <br />
                  <Typography
                    sx={{
                      display: "block",
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    Ongoing
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  sx={{ color: "primary.main" }}
                  {...label}
                  icon={<CircleOutlinedIcon />}
                  checkedIcon={<CheckCircleRoundedIcon />}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Back End Development <br />
                  <Typography
                    sx={{
                      display: "block",
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    Upcoming
                  </Typography>
                </Typography>
              </Box>

              <Button sx={{ textTransform: "capitalize" }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  + Create a new task
                </Typography>
              </Button>
            </Box>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                Weekly Progress
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 3,
                }}
              >
                <Box sx={{ width: "120px" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box
        sx={{
          flex: {xs:'full', lg:1},
          width: '100%',
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Paper sx={{ p: "20px", width: "100%" }}>
            <RecentActivity />
        </Paper>
        <Paper sx={{ p: "20px", width: "100%" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, mb:3 }}>
            Task Progress
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "end",
              mb: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
              <span>Copywriting</span>
            <span>5/10</span>
          </Typography>
          <Typography
            sx={{
              width: "100%",
              height: "4px",
              borderRadius: "5px",
              background: "rgb(229, 234, 242)",
              my: "5px",
              mb: 2,
            }}
          >
            <span
              style={{
                display: "block",
                width: "54%",
                height: "100%",
                borderRadius: "5px",
                background: "rgb(253, 57, 109)",
              }}
            ></span>
          </Typography>
          
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "end",
              mb: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
              <span>Illustrations</span>
            <span>2/7</span>
          </Typography>
          <Typography
            sx={{
              width: "100%",
              height: "4px",
              borderRadius: "5px",
              background: "rgb(229, 234, 242)",
              my: "5px",
              mb: 2,
            }}
          >
            <span
              style={{
                display: "block",
                width: "28%",
                height: "100%",
                borderRadius: "5px",
                background: "rgb(255, 233, 31)",
              }}
            ></span>
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "end",
              mb: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
              <span>UI Design</span>
            <span>3/8</span>
          </Typography>
          <Typography
            sx={{
              width: "100%",
              height: "4px",
              borderRadius: "5px",
              background: "rgb(229, 234, 242)",
              my: "5px",
              mb: 2,
            }}
          >
            <span
              style={{
                display: "block",
                width: "37.5%",
                height: "100%",
                borderRadius: "5px",
                background: "rgb(36, 153, 239)",
              }}
            ></span>
          </Typography>

        </Paper>

        <Paper sx={{ p: "20px", width: "100%" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Todo List
          </Typography>
          <TodoTasks Data={SmallData} />
        </Paper>
        
        <Paper sx={{ p: "20px 20px 20px 20px", width: "100%" }}>
            <RecentChat />
        </Paper>
      </Box>
    </Box>
  );
}

const projectManagement = () => {
  return (
    <Layout title={"Project Management V2"}>
      <Prepare />
    </Layout>
  );
};

export default projectManagement;
