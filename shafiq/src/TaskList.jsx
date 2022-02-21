import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const TaskRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: -10px;
`;
const TaskCol = styled.div`
  flex-basis: 100%;
  flex-grow: 0;
  max-width: 100%;
  padding-top: 10px;
`;
const TaskContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 0px rgb(119 119 119 / 40%);
  padding: 10px 15px;
  border: 1px solid #ddd;
  & .edit_option {
    position: absolute;
    right: 0px;
    & .select_drop {
      height: 40px;
    }
  }
`;

const TaskList = (props) => {
  const { taskList, deleteTaskList, editTaskList } = props;

  return (
    <TaskRow>
      {taskList.map((data, i) => (
        <TaskCol key={i}>
          <TaskContent>
            <div className="edit_option">
              <Dropdown key={i}>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <IconButton aria-label="more" id="long-button" aria-haspopup="true">
                    <MoreVertIcon />
                  </IconButton>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => editTaskList(data, i)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteTaskList(data, i)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {data.name}
          </TaskContent>
        </TaskCol>
      ))}
    </TaskRow>
  );
};

export default TaskList;
