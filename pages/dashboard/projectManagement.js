import { Box, IconButton, Paper, Typography } from "@mui/material";
import UkoDashboard from "../../components/dashboard/UkoDashboard";
import Layout from "../Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRouter } from "next/router";
import { Data } from "../../data/ProjectmanagementData";
import TodoTasks from "../../components/dashboard/TodoTasks";

import { WorldMap } from "react-svg-worldmap";
import BarChart from "../../Charts/BarChart";

function Prepare() {
  const router = useRouter();

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
  ];

  console.log(data);
  return (
    <Box>
      {/* <Paper>
        <WorldMap color="rgb(36, 153, 239)" size="lg" data={data} />
      </Paper> */}

      <Box
        sx={{
          display: "flex",
          m: "0px 30px 30px 30px",
          gap: { xs: "0px", md: "30px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Paper sx={{ width: "100%", py: 31, m: "30px 0px" }}>
            {/* <Box>
              <Paper sx={{ p: "30px" }}>
                <BarChart />
              </Paper>
            </Box> */}
          </Paper>
          <Paper sx={{ maxWidth: "900px" }}>
            <TableContainer
              sx={{
                p: { xs: "20px", sm: "30px 20px 15px 20px" },
              }}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: 600, ml: 2 }}>
                Team Progress <br />
                <Typography
                  sx={{ display: "block", color: "grey", fontSize: "13px" }}
                >
                  890,344 Sales
                </Typography>
              </Typography>
              <Table
                sx={{ minWidth: 100, lineBreak: "break" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      Author
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        fontWeight: 600,
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      Company
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        fontWeight: 600,
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      Progress
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        pr: 6,
                        fontWeight: 600,
                      }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            display: { xs: "none", sm: "block", p: 0, m: 0 },
                          }}
                        >
                          <img
                            style={{ width: "40px" }}
                            src="https://uko-react.vercel.app/static/avatar/001-man.svg"
                          />
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 600,
                            ml: { xs: 0, sm: 2 },
                          }}
                        >
                          Brad Simmons <br />
                          <Typography
                            sx={{
                              display: "block",
                              color: "grey",
                              fontSize: "13px",
                            }}
                          >
                            HTML, JS, ReactJS
                          </Typography>
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}
                      >
                        Intertico <br />
                        <Typography
                          sx={{
                            display: "block",
                            color: "grey",
                            fontSize: "13px",
                          }}
                        >
                          Web, UI/UX Design
                        </Typography>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          height: "5px",
                          borderRadius: "5px",
                          background: "rgb(36, 153, 239, 0.3)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "91%",
                            height: "100%",
                            borderRadius: "5px",
                            background: "rgb(36, 153, 239)",
                          }}
                        ></span>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: { xs: 2, sm: 4 },
                      }}
                    >
                      <span
                        style={{
                          background: "#e0e0e0",
                          color: "#757575",
                          width: "60px",
                          borderRadius: "16px",
                          textAlign: "center",
                          padding: "5px",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                        onClick={() => router.push("/")}
                      >
                        view
                      </span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            display: { xs: "none", sm: "block", p: 0, m: 0 },
                          }}
                        >
                          <img
                            style={{ width: "40px" }}
                            src="https://uko-react.vercel.app/static/avatar/002-girl.svg"
                          />
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 600,
                            ml: { xs: 0, sm: 2 },
                          }}
                        >
                          Selena Williams <br />
                          <Typography
                            sx={{
                              display: "block",
                              color: "grey",
                              fontSize: "13px",
                            }}
                          >
                            HTML, JS, VueJS
                          </Typography>
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}
                      >
                        Web Devs <br />
                        <Typography
                          sx={{
                            display: "block",
                            color: "grey",
                            fontSize: "13px",
                          }}
                        >
                          Web, Mobile Apps
                        </Typography>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          height: "5px",
                          borderRadius: "5px",
                          background: "rgb(36, 153, 239, 0.3)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "47%",
                            height: "100%",
                            borderRadius: "5px",
                            background: "rgb(36, 153, 239)",
                          }}
                        ></span>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: { xs: 2, sm: 4 },
                      }}
                    >
                      <span
                        style={{
                          background: "#e0e0e0",
                          color: "#757575",
                          width: "60px",
                          borderRadius: "16px",
                          textAlign: "center",
                          padding: "5px",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                        onClick={() => router.push("/")}
                      >
                        view
                      </span>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            display: { xs: "none", sm: "block", p: 0, m: 0 },
                          }}
                        >
                          <img
                            style={{ width: "40px" }}
                            src="https://uko-react.vercel.app/static/avatar/005-man-1.svg"
                          />
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 600,
                            ml: { xs: 0, sm: 2 },
                          }}
                        >
                          Steve Jobs <br />
                          <Typography
                            sx={{
                              display: "block",
                              color: "grey",
                              fontSize: "13px",
                            }}
                          >
                            Python, Django
                          </Typography>
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: 2,
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "13px", fontWeight: 600, ml: 2 }}
                      >
                        PyCharm <br />
                        <Typography
                          sx={{
                            display: "block",
                            color: "grey",
                            fontSize: "13px",
                          }}
                        >
                          ML, DS
                        </Typography>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        display: { xs: "none", sm: "table-cell" },
                      }}
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          height: "5px",
                          borderRadius: "5px",
                          background: "rgb(36, 153, 239, 0.3)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "78%",
                            height: "100%",
                            borderRadius: "5px",
                            background: "rgb(36, 153, 239)",
                          }}
                        ></span>
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        textAlign: "start",
                        fontSize: "13px",
                        border: 0,
                        p: "8px",
                        pl: { xs: 2, sm: 4 },
                      }}
                    >
                      <span
                        style={{
                          background: "#e0e0e0",
                          color: "#757575",
                          width: "60px",
                          borderRadius: "16px",
                          textAlign: "center",
                          padding: "5px",
                          display: "inline-block",
                          cursor: "pointer",
                        }}
                        onClick={() => router.push("/")}
                      >
                        view
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper sx={{ width: "100%", py: 20, m: "30px 0px" }}></Paper>
          <Paper sx={{ p: "15px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
              Todo List
            </Typography>
            <TodoTasks Data={Data} />
          </Paper>
        </Box>
      </Box>

      <Box sx={{ m: "0 30px" }}>
        <UkoDashboard src="https://uko-react.vercel.app/static/illustration/project-management-dashboard.svg" />
      </Box>
    </Box>
  );
}

const projectManagement = () => {
  return (
    <Layout title={"Project Management"}>
      <Prepare />
    </Layout>
  );
};

export default projectManagement;
