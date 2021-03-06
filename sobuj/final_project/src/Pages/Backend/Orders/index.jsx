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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CreateCategory from './create';
import UpdateCategory from './update';
import { Grid, Typography } from '@material-ui/core';
import BackendLayout from '../../../Layouts/Backend/Layouts';
import { Navigate, useNavigate } from 'react-router-dom';
import { loadAllOrderAdmin, loadAllOrdersAdmin, loadOrders, updateOrderAction, editOrder } from '../../../store/action/OrderAction';
import { loadMyInfo } from '../../../store/action/UserAction';
import UpdateOrder from './update';

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

const ManageOrders =()=>{
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const loggedInUser = useSelector((store) =>store.userStore);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
      setUserToken(loggedInUser.token.userInfo.token)
    }, []);
    
 
 
    const { manageOrders } = useSelector((state) => state.manageOrders); 
    console.log(manageOrders, '=====MyOrders from Admin Panel');
  
    useEffect(() => {
      if(loggedInUser.isAuthUser === true){
          dispatch(loadAllOrderAdmin(loggedInUser.token.userInfo.token));
      }else{
        alert('please login first');
        navigate('/login');
      }
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
          dispatch(updateOrderAction(deleteispatch));
          window.location.reload();
        }
    }

    const updateCategory = (id) =>{
        console.log(id, '===== category id for update')
    }

    const getTotalPrice = (index) => {
      let totalPrice = 0;
      manageOrders[index].products?.map((orderData) => (totalPrice += orderData.productId['price']));
      return totalPrice;
    };
    
       
  async function approvalSubmit(data) {
    return fetch(`http://localhost:8080/order/${data.orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "bearer "+ data.userToken
      },
      body: JSON.stringify({
            "status": 1,
        }),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json));
  }

const handleApproveOrder = async (orderId) =>{
     
      const userToken = loggedInUser.token.userInfo.token;
        const formDispatch = await approvalSubmit({
            userToken, orderId
        });
        dispatch(editOrder(formDispatch));
        // handleCloseCreate()
        window.location.reload();
  }
  
  const toViewOrder = (id) =>{
    navigate(`/admin/order-details/${id}`)
  }
  return (
    <>
     
     <Grid container spacing={1}>
         
          {/* <UpdateOrder /> */}
          <Grid xs={12}>
              <Typography mt={5} variant='h4' align="center">
                  Manage Orders
              </Typography>
          </Grid>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Order ID</StyledTableCell>
                  <StyledTableCell align="right">Detail</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {manageOrders.map((dataRow, index) => {
                  return (
                    <StyledTableRow key={dataRow._id}>
                      <StyledTableCell component="th" scope="row">
                        {dataRow._id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                       <span style={{ fontWeight:"700" }}> Item Quantity: {dataRow.products.length}</span>
                         <br/>
                         <span style={{ fontWeight:"700" }}>  Total Price: ${
                          getTotalPrice(index)
                        } </span>

                       
                      </StyledTableCell>
                      <StyledTableCell align="right">
                          {
                            dataRow.status===0 && (
                                <Typography variant='h6' style={{ color:'#044888', border:"1px dotted #044888", padding:"5px", borderRadius:"5px" }} >Order Pending...</Typography>
                            )
                          }
                          {
                            dataRow.status===1 && (
                                <Typography variant='h6' style={{ color:'green', border:"1px dotted green", padding:"5px", borderRadius:"5px" }} >Order Placed</Typography>
                            )
                          }
                         

                          {    
                              dataRow.status===2 && (
                                  <Typography variant='h6' style={{ color:'red', border:"1px dotted red", padding:"5px", borderRadius:"5px" }} >Order Cancelled</Typography>
                              )
                          }
                      </StyledTableCell>
                       
                      <StyledTableCell align="right">
                        <ButtonGroup disableElevation variant="contained">
                           
                          <Button
                              variant="contained"
                              color="primary"
                              target="_blank"
                              onClick={() => toViewOrder(dataRow._id, )}
                            >
                              <RemoveRedEyeIcon />
                          </Button>
                          {/* <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleApproveOrder(dataRow._id)}
                          >
                            <CheckBoxIcon />
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(dataRow._id)}
                          >
                            {" "}
                            <DeleteIcon />{" "}
                          </Button> */}
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
  )
}
export default BackendLayout(ManageOrders);