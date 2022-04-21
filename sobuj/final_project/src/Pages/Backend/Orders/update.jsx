
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, TextField } from '@mui/material';
import { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoryAction } from '../../../store/action/CategoryAction';
import BackendLayout from '../../../Layouts/Backend/Layouts';
import { useParams } from 'react-router-dom';
import { editOrder } from '../../../store/action/OrderAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateOrder =()=>{
  const { id } = useParams();
  console.log (id, '===== order ID for update');
  const loggedInUser = useSelector((store) =>store.userStore);
  const dispatch = useDispatch();

  
  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const [status, setStatus]=useState("");
  const [error, setError]=useState(false);


 
  async function formSubmit(data) {
    return fetch(`http://localhost:8080/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "bearer "+ data.userToken
      },
      body: JSON.stringify({
            "status": data.status,
        }),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json));
  }

const handleFormSubmit = async e =>{
    if (e && e.preventDefault) { e.preventDefault();}
    if(status.length){ 
      const userToken = loggedInUser.token.userInfo.token;
        const formDispatch = await formSubmit({
            userToken,
            status,
        });
        dispatch(editOrder(formDispatch));
        handleCloseCreate()
        window.location.reload();

    }else{
        setError(true);
    }
  }

  return (
    <>
    <Button 
        variant="contained" 
        color="secondary"
        sx={{ mt:2 }}
        onClick={handleOpenCreate} 
        >Update Order</Button>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreate}
        onClose={handleCloseCreate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreate}>
          <Box sx={style}>
          <Card>
              <CardActionArea>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Add New Category
                      </Typography>
                        <>
                          <Box>
                              <TextField sx={{ mt:2 }}
                                  onChange={(e)=>setStatus(e.target.value)}
                                  fullWidth
                                      error={error}
                                      id="outlined"
                                      label="Approval Status"                                          
                                      helperText={error? "Must fill the task field!":""}
                                      variant="outlined"
                                  
                                      value={status}
                              />
                              
                           
                              
                          </Box>
                              <Button sx={{ mt:5 }} onClick={()=>{handleFormSubmit()}} variant="contained" color="secondary">
                                  Add Category
                              </Button>
                              <Button sx={{ mt:5, ml:10 }} onClick={()=>{handleCloseCreate()}} >
                                  Close
                              </Button>
                          </>
                        

                  </CardContent>
              </CardActionArea>
                     
            </Card>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
export default UpdateOrder;