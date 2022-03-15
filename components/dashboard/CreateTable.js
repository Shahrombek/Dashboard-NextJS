import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";

export default function CreateTable(props) {
  console.log(props);
  return (
    <TableContainer
      sx={{ p: { xs: "20px", sm: "30px 20px 15px 20px" } }}
    >
      <Typography sx={{ fontSize: "15px", fontWeight: 600, ml: 2 }}>
        {props.title || ""}
      </Typography>
      <Table
        sx={{ minWidth: 150, lineBreak: "break" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "start",
                fontSize: "13px",
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
              }}
            >
              {props.head.tab1}
            </TableCell>
            <TableCell
              sx={{ textAlign: "start", fontSize: "13px", fontWeight: 600 }}
            >
              {props.head.tab2}
            </TableCell>
            <TableCell
              sx={{ textAlign: "start", fontSize: "13px", fontWeight: 600 }}
            >
              {props.head.tab3}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                fontSize: "13px",
                pr:6,
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
              }}
            >
              {props.head.tab4}
            </TableCell>
            <TableCell
              sx={{ textAlign: "start", fontSize: "13px", fontWeight: 600 }}
            >
              {props.head.tab5}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map((row) => (
            <TableRow
              key={row.img}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  textAlign: "start",
                  fontSize: "13px",
                  border: 0,
                  p:'8px',
                  pl: 2,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {row.tab1}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "start",
                  fontSize: "13px",
                  border: 0,
                  p:'8px',
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
                  <Typography sx={{ display: { xs: "none", sm: "block", p:0, m:0 } }}>
                    <img style={{ width: "40px" }} src={row.img} />
                  </Typography>
                  {row.tab2}
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "start",
                  fontSize: "13px",
                  border: 0,
                  p:'8px',
                  pl: 2,
                }}
              >
                {row.tab3}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "start",
                  fontSize: "13px",
                  border: 0,
                  p: "20px 0px 0px 30px",
                  display: { xs: "none", sm: "block" },
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
                  }}
                >
                  {row.tab4}
                </span>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "start",
                  fontSize: "13px",
                  border: 0,
                  p:'8px',
                  pl: 2,
                  color: row.color ? row.color : '',
                }}
              >
                {row.tab5}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
