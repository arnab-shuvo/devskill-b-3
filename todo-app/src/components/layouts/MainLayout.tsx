import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const TaskList: TaskType[] = [
  { Title: "Task-1" },
  { Title: "Title-2" },
  { Title: "Title-3" },
];

export type TaskType = {
  Title: string;
};

const MainLayout = () => {
  const [page, setPage] = useState<"add" | "edit" | "view">("view");
  const [Tasks, setTasks] = useState<TaskType[]>(TaskList);
  const [Task, setTask] = useState<TaskProps>({} as TaskProps);

  const DeleteTask = (index: number) => {
    setTasks(Tasks.filter((_, i) => i !== index));
  };

  const AddTask = (task: TaskType | null) => {
      if(task !== null) setTasks([...Tasks, task]);
      setPage('view');
  }

  const UpdateTask = (task: TaskType | null, index: number) => {
    if(task !== null) {
        const updatedTasks = [...Tasks]
        updatedTasks[index] = task;
        setTasks(updatedTasks);
    }
    setPage('view');
  }

  const EditTask = (task: TaskType, index: number) => {
    setTask({Mode: 'edit', 
    Task: task, 
    AddTask: AddTask});
    setPage('edit');
  }

  return (
    <Container sx={{ bgcolor: "#4172EB" }}>
      <Container maxWidth="sm">
        <Grid
          container
          justifyContent={"center"}
          justifyItems="center"
          alignItems={"center"}
          minHeight={"100vh"}
        >
          <Grid item xs bgcolor="#FCFCFC" sx={{ borderRadius: "3%" }}>
            <Grid
              container
              item
              justifyContent={"center"}
              sx={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#757575",
                  fontWeight: "bold",
                  paddingY: "1rem",
                }}
              >
                Todo-App
              </Typography>
            </Grid>
            <Grid
              container
              item
              minHeight={600}
              justifyContent={"center"}
              justifyItems={"center"}
              alignItems={"center"}
              overflow="auto"
            >
              {page === "view" ? (
                <TaskView
                  Tasks={Tasks}
                  DeleteTask={(index: number) => DeleteTask(index)}
                  EditTask={(task: TaskType, index: number) => EditTask(task, index)}
                />
              ) : page === "add" ? (
                <TaskAddEdit Task={null} Mode={Task.Mode} 
                AddTask={(task: TaskType | null) => AddTask(task)}/>
              ) : (
                <TaskAddEdit Mode={Task.Mode} Task={Task.Task} 
                AddTask={(task: TaskType | null) => AddTask(null)}/>
              )}
            </Grid>

            <Grid container item justifyContent={"center"} paddingY={2}>
              <IconButton onClick={() => setPage('add')}>
                <AddIcon
                  sx={{
                    bgcolor: "#518AFF",
                    color: "white",
                    padding: "1rem",
                    boxSizing: "content-box",
                    borderRadius: "50%",
                    fontSize: "2rem",
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

type TaskProps = {
  Mode: "add" | "edit",
  Task: null | TaskType,
  AddTask: (task: TaskType | null) => void;
};

const TaskAddEdit = ({ Mode, Task, AddTask }: TaskProps) => {
const [task, setTask] = useState<TaskType | null>(Task); 
  if (Mode === "add") {
    return (
      <Box component={"form"} noValidate autoComplete="off">
        <Stack direction={"column"} spacing={8}>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Title"
            defaultValue=''
            sx={{
              minWidth: "350px",
            }}
            value={task?.Title}
            onChange={(e) => setTask({Title: e.target.value})}
          />
          <div style={{ minWidth: "350px" }}>
            <Button
              variant="contained"
              sx={{ width: "100px", float: "right" }}
              endIcon={<SaveIcon />}
              onClick={() => AddTask(task)}>
              Save
            </Button>
          </div>
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box component={"form"} noValidate autoComplete="off">
        <Stack direction={"column"} spacing={8}>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Title"
            defaultValue={task?.Title}
            sx={{
              minWidth: "350px",
            }}
            value={task?.Title}
            onChange={(e) => setTask({Title: e.target.value})}
          />
          <div style={{ minWidth: "350px" }}>
            <Button
              variant="contained"
              sx={{ width: "100px", float: "right" }}
              onClick={() => AddTask(task)}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
          </div>
        </Stack>
      </Box>
    );
  }
};

<Card sx={{ display: "flex" }}>
  <Box minWidth="350px">
    <CardContent sx={{ marginTop: "10px" }}>
      <Typography>This is title</Typography>
    </CardContent>
  </Box>
  <Box marginTop={2} marginRight={2}>
    <IconButton aria-label="Edit" color="primary">
      <EditIcon />
    </IconButton>
    <IconButton aria-label="Delete" sx={{ color: "#eb4034" }}>
      <DeleteIcon />
    </IconButton>
  </Box>
</Card>;

type TaskViewProps = {
  Tasks: TaskType[],
  DeleteTask: (index: number) => void;
  EditTask: (task: TaskType, index: number) => void;
};

const TaskView = ({ Tasks, DeleteTask, EditTask }: TaskViewProps) => {
  return (
    <Stack direction={"column"} spacing={3} marginY={5}>
      {Tasks.map((task, index) => (
        <Card sx={{ display: "flex" }} key={index}>
          <Box minWidth="350px">
            <CardContent sx={{ marginTop: "10px" }}>
              <Typography>{task.Title}</Typography>
            </CardContent>
          </Box>
          <Box marginTop={2} marginRight={2}>
            <IconButton aria-label="Edit" color="primary"
            onClick={() => EditTask(task, index)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              sx={{ color: "#eb4034" }}
              onClick={() => DeleteTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default MainLayout;
