import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackendLayout from '../../../Layouts/Backend/Layouts'
import { loadUserListAction } from '../../../store/action/UserAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ManageUser = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const loggedInUser = useSelector((store) =>store.userStore);

  const { userList } = useSelector((state) => state.userList); 
  console.log(userList, '=====Users from Admin Panel');

  useEffect(() => {
    if(loggedInUser.isAuthUser === true){
        dispatch(loadUserListAction(loggedInUser.token.userInfo.token));
    }else{
      alert('please login first');
      navigate('/login');
    }
  }, []);



  return (
     
    <Grid container spacing={1}>
    {/* <Button variant="contained" color='secondary' onClick={toAdminDashboard}> Dashboard </Button>
      <Button sx={{ ml:"5px;" }} variant="contained" color='primary' onClick={handleOpen}> Add </Button> */}
    
    
    {/* To Create Product by Modal */}
    {/* <CreateCategory /> */}
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">User Role</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userList.map((dataRow) => {
            return (
              <StyledTableRow key={dataRow._id}>
                <StyledTableCell component="th" scope="row">
                  {dataRow.username}
                </StyledTableCell>
                <StyledTableCell align="right">
                {dataRow.email}
                </StyledTableCell>
                <StyledTableCell align="right">
                {dataRow.phone}
                </StyledTableCell>
                <StyledTableCell align="right">
                {dataRow.role}
                </StyledTableCell>
                 
                <StyledTableCell align="right">
                  <ButtonGroup disableElevation variant="contained">
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={() => viewOrder(dataRow._id)}
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={() => handleApproveOrder(dataRow._id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      // onClick={() => handleDelete(dataRow._id)}
                    >
                      {" "}
                      <DeleteIcon />{" "}
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  )
}

export default BackendLayout(ManageUser)
