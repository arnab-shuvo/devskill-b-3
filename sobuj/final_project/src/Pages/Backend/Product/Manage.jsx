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
import { deleteProduct, getProductList, productDeleteAction } from '../../../store/action/ProductAction';
import UpdateProduct from './Update';
import CreateProductFromModal from './CreateProdModal';
import { Grid } from '@material-ui/core';
import BackendLayout from '../../../Layouts/Backend/Layouts';
import { Navigate, useNavigate } from 'react-router-dom';


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

    //Update Procut
    const [selectUpdate, setSelectUpdate] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setSelectUpdate = null
    };

    const updateProduct = (product) => {
      //alert("Update Product-"+ id)
      setSelectUpdate(product);
      setOpen(true);
    };    

      const { productList } = useSelector((store) => store.productList);
      //console.log(productList, "===store");
      // const [requestData, setRequestData] = useState();
      const loggedInUser = useSelector((store) =>store.userStore);
      const [userToken, setUserToken] = useState(null);
  
      useEffect(() => {
        setUserToken(loggedInUser.token.userInfo.token)
      }, []);

      const dispatch = useDispatch();
      useEffect(()=>{
          // setRequestData(productList);
          
          fetch("http://127.0.0.1:8080/products")
          .then((res) => res.json())
          .then((json) => {
              dispatch(getProductList(json));
          });
          
      }, []);


    // PRODUCT DELETE
    async function deleteSubmit(data) {
      return fetch(`http://localhost:8080/products/${data.id}`, {
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
      if(window.confirm("Are you sure about to delete the product")){
          // const token = userInfo.token.userInfo.token;
          const deleteispatch = await deleteSubmit({
            userToken,
            id
          });
          dispatch(productDeleteAction(deleteispatch));
          window.location.reload();
          // setRequestData(productList)
      }
    }
      
    const navigate =useNavigate();
    const toCreateProduct = () =>{
      navigate('/admin/create-product/');
    }

    return (
      <>
        <Grid container spacing={1}>
          {/* <Button variant="contained" color='secondary' onClick={toAdminDashboard}> Dashboard </Button>
            <Button sx={{ ml:"5px;" }} variant="contained" color='primary' onClick={handleOpen}> Add </Button> */}
          <Button 
          variant="contained" 
          color="secondary"
          sx={{ mt:2 }}
          onClick={toCreateProduct} 
          >Add Product</Button>
         
          {/* 
            To Create Product by Modal
            <CreateProductFromModal /> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align="right">Category</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Stock</StyledTableCell>
                  <StyledTableCell align="right">Image</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productList.map((product) => {
                  let image = product.image;
                  return (
                    // <p  key={product._id} >{product.title}</p>

                    <StyledTableRow key={product._id}>
                      <StyledTableCell component="th" scope="row">
                        {product.title}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {product.category.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {product.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {product.stock}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <img
                          height={"100"}
                          src={"http://127.0.0.1:8080" + image}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <ButtonGroup disableElevation variant="contained">
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => updateProduct(product._id)}
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(product._id)}
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