import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';

import CreateCategory from './create';
import UpdateCategory from './update';
import { Grid } from '@material-ui/core';
import BackendLayout from '../../../Layouts/Backend/Layouts';
import { Navigate, useNavigate } from 'react-router-dom';
import { loadCategories, deleteCategoryAction} from '../../../store/action/CategoryAction';


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
  
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
const ManageProduct = () =>{
    const dispatch = useDispatch();
      
    const navigate =useNavigate();
   

    const loggedInUser = useSelector((store) =>store.userStore);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
      setUserToken(loggedInUser.token.userInfo.token)
    }, []);
    
    //Update Procut
    const [selectUpdate, setSelectUpdate] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setSelectUpdate = null
    };

    const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)

    useEffect(() => {
      dispatch(loadCategories());
    }, []);

    // DELETE CATEGORY
    async function deleteSubmit(data) {
      return fetch(`http://localhost:8080/category/${data.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "authorization": "bearer "+ data.userToken
          },
        })
        .then((data) => data.json())
        .then((json) => json)
        .then((json) => console.log(json));
    }

    const handleDelete = async (id)=>{
      if(window.confirm("Are you sure about to delete the category?")){
          const deleteispatch = await deleteSubmit({
            userToken,
            id
          });
          dispatch(deleteCategoryAction(deleteispatch));
          window.location.reload();
        }
    }

    const updateCategory = (id) =>{
        console.log(id, '===== category id for update')
    }



    return (
      <>
        <Grid container spacing={1}>
          {/* <Button variant="contained" color='secondary' onClick={toAdminDashboard}> Dashboard </Button>
            <Button sx={{ ml:"5px;" }} variant="contained" color='primary' onClick={handleOpen}> Add </Button> */}
          
          
          {/* To Create Product by Modal */}
          <CreateCategory />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryList.map((category) => {
                  return (
                    <StyledTableRow key={category._id}>
                      <StyledTableCell component="th" scope="row">
                        {category.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {category.description}
                      </StyledTableCell>
                       
                      <StyledTableCell align="right">
                        <ButtonGroup disableElevation variant="contained">
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => updateCategory(category._id)}
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(category._id)}
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
      </>
    );
}

export default BackendLayout(ManageProduct);