import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../Layout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { deletTodo, EditTodo, getTodo } from "../../redux/actions/newsActions";
import { v4 as uuidv4 } from "uuid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Prepare() {
  const datass = useSelector((state) => state.redux.addTodo);

  const todos = Object.values(datass);
  const [id, setId] = useState(false);
  const { register, handleSubmit,setValue } = useForm({
    defaultValues: {title:'', info:''},
  });

  const addTodo = () => {
    setValue("title", "")
    setValue("info", "")
    setForm(!form);
  };
  
  const [form, setForm] = useState(false);
  const removeTodo = (item) => {
    item.completed = false;
    todos.map((e) => e.completed = false);
    deletTodo(item);
  };

  const editTodo = (item) => {
    item.completed = false;
    setForm(true);
    setId(item.id);
    setValue("title", item.title)
    setValue("info", item.info)
  };

  const onSubmit = (data) => {
    data.completed = false;
    id ? data.id = id : data.id = uuidv4();
    getTodo(data);
    addTodo();
    
    setId(false);
  };

  
  //   Drag Drop
  const [columnTodo, setColumnTodo] = useState(-1);
  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  // Other section
  const openSetting = (item) => {
    item.completed = true;
    getTodo(item);
  };
  const closeSetting = (item) => {
    item.completed = false;
    getTodo(item);
  }

  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: "15px", width: "100%", height: "600px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 630 }}>
              To do
            </Typography>
            <Box sx={{ position: "sticky" }}>
              {!form ? (
                <Button
                  onClick={() => addTodo()}
                  variant="contained"
                  sx={{ width: "100%", py: 1, my: 1 }}
                >
                  <AddRoundedIcon />
                </Button>
              ) : (
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    variant="filled"
                    size="small"
                    sx={{ width: "100%", my: 1, fontSize: "14px !important" }}
                    label="Title"
                    
                    {...register("title", { required: true },)}
                  />
                  <TextField
                    variant="filled"
                    size="small"
                    sx={{ width: "100%", my: 1, fontSize: "14px !important" }}
                    multiline
                    rows={4}
                    label="Description"
                    {...register("info", { required: true })}     
                  />
                  <Box
                    sx={{ display: "flex", gap: "15px", width: "100%", my: 2 }}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ textTransform: "capitalize", py: 1, flex: 1 }}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => addTodo()}
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        flex: 1,
                        py: 1,
                        backgroundColor: "rgb(229, 234, 242)",
                        "&:hover": { backgroundColor: "rgb(229, 234, 242)" },
                        color: "rgb(148, 164, 196)",
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              )}
              <Box
                sx={{ height: form ? "280px" : "490px", overflowY: "auto" }}
                onDrop={(event) => drop(event)}
                onDragOver={(event) => allowDrop(event)}
              >
                {todos.length !== 0 &&
                  todos.map((item, index) => {
                    return (
                      <Paper
                      key={item.id}
                      sx={{
                          p: "15px",
                          my: 2,
                          mx: "auto",
                          width: "95%",
                          boxShadow: "rgb(0 0 0 / 7%) 0px 1px 21px 2px",
                          cursor: "pointer",
                        }}
                        id={item.id}
                        draggable={true}
                        onDragStart={(event) => drag(event)}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            width: "100%",
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                          }}
                        >
                          <span>July 2, 2020</span>
                          <IconButton onClick={() => openSetting(item)}>
                            <MoreHorizIcon />
                          </IconButton>
                          {item.completed && (
                            <Box
                              sx={{
                                py: "4px",
                                display: "flex",
                                alignItems: "start",
                                flexDirection: "column",
                                width: "110px",
                                position: "absolute",
                                top: "30px",
                                right: "-20px",
                                zIndex: 10000,
                                background: "white",
                                borderRadius: "4px",
                                margin: '20px',
                                boxShadow: "rgb(0 0 0 / 7%) 0px 1px 21px 2px",
                              }}
                              // onClick={() => closeSetting(item)}
                            >
                              <Button
                                sx={{
                                  width: "100%",
                                  textTransform: "capitalize",
                                  fontSize: "13px",
                                  color: "rgb(0,0,0, 0.5)",
                                  "&:hover": { color: "rgb(36, 153, 239)" },
                                  display: "flex",
                                  alignItems: "start",
                                  justifyContent: "start",
                                  pl: 2,
                                }}
                                onClick={() => editTodo(item)}
                              >
                                <ModeEditOutlineOutlinedIcon /> Edit
                              </Button>
                              <Button
                                sx={{
                                  width: "100%",
                                  textTransform: "capitalize",
                                  fontSize: "13px",
                                  color: "rgb(0,0,0, 0.5)",
                                  "&:hover": { color: "rgb(36, 153, 239)" },
                                  display: "flex",
                                  alignItems: "start",
                                  justifyContent: "start",
                                  pl: 2,
                                }}
                                onClick={() => removeTodo(item)}
                              >
                                <DeleteOutlineOutlinedIcon /> Remove
                              </Button>
                            </Box>
                          )}
                        </Typography>
                        <Box
                          sx={{
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "16px", fontWeight: 600, pt: 3 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 500,
                              color: "secondary.main",
                              pb: 3,
                            }}
                          >
                            {item.info}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 500,
                              display: "flex",
                              alignItems: "end",
                              justifyContent: "space-between",
                              width: "100%",
                              mt: 1,
                            }}
                          >
                            <span>Project Progress</span>
                            <span>32%</span>
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
                            <AvatarGroup
                              total={3}
                            >
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
                        </Box>
                      </Paper>
                    );
                  })}
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: "20px 15px", width: "100%", height: "600px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 630 }}>
              In Progress
            </Typography>
            <Box
              id="div2"
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              style={{
                width: "100%",
                height: "530px",
                my: 2,
                py: 2,
                pb: 6,
                overflowY: "auto",
              }}
            ></Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: "20px 15px", width: "100%", height: "600px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 630 }}>
              Done
            </Typography>
            <Box
              id="div3"
              onDrop={(event) => drop(event)}
              onDragOver={(event) => allowDrop(event)}
              style={{
                width: "100%",
                height: "530px",
                my: 2,
                py: 2,
                pb: 6,
                overflowY: "auto",
              }}
            ></Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const kanban = () => {
  return (
    <Layout title={"Todo List"}>
      <Prepare />
    </Layout>
  );
};

export default kanban;
