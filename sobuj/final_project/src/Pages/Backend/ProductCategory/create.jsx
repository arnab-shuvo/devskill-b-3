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

export default function CreateCategory() {
  const loggedInUser = useSelector((store) =>store.userStore);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setUserToken(loggedInUser.token.userInfo.token)
  }, []);
  
  const dispatch = useDispatch();

  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const [name, setName]=useState("");
  const [category, setCategory]=useState("");
  const [price, setPrice]=useState("");
  const [stock, setStock]=useState("");
  const [description, setDescription]=useState("");
  const [image, setImage]=useState("");
  const [error, setError]=useState(false);

  // const addCategory = () =>{
  //   if(name.length){ 
  //       console.log(name , description );
        
  //       fetch("http://127.0.0.1:8080/category/", {
  //           method: "POST",
  //           headers: {
  //               authorization: `bearer ${userToken}`,
  //           },
  //           body: JSON.stringify({
  //               'name': name,
  //               'description': description,
  //           }),
  //         })
  //         .then((res) => res.json())
  //         .then((json) => console.log(json));

  //         handleCloseCreate()
  //     }else{
  //         setError(true);
  //     }
  // };
  async function formSubmit(data) {
    return fetch("http://localhost:8080/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "bearer "+ data.userToken
      },
      body: JSON.stringify({
            "name": data.name,
            "description": data.description,
        }),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json));
  }

const handleFormSubmit = async e =>{
    if (e && e.preventDefault) { e.preventDefault();}
    if(name.length){ 
        const formDispatch = await formSubmit({
            userToken,
            name,
        description,
        });
        dispatch(addCategoryAction(formDispatch));
        handleCloseCreate()
        window.location.reload();

    }else{
        setError(true);
    }
  }




  return (
    <div>
      <Button 
        variant="contained" 
        color="secondary"
        sx={{ mt:2 }}
        onClick={handleOpenCreate} 
        >Add Category</Button>
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
                                  onChange={(e)=>setName(e.target.value)}
                                  fullWidth
                                      error={error}
                                      id="outlined"
                                      label="Category Name"                                          
                                      helperText={error? "Must fill the task field!":""}
                                      variant="outlined"
                                  
                                      value={name}
                              />
                              
                              <Box>
                                  <TextareaAutosize  
                                      onChange={(e)=>setDescription(e.target.value)}
                                      aria-label="minimum height"
                                      minRows={3}
                                      placeholder="Product Description"
                                      style={{ width: "100%", padding:"5px", minHeight:'50px' }}
                                      label="Category Description"                                          
                                      helperText={error? "Must fill the task field!":""}
                                      variant="outlined"
                                      value={description}
                                  />
                              </Box>
                              
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
    </div>
  );
}
