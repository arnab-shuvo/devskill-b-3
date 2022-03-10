import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Container } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const AddProduct = () => {
  const [modal, setModal] = useState(false);

  function viewModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  return (
    <>
      <Container>
        <Button onClick={viewModal}>Create Product</Button>
        <Modal
          open={modal}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <TextField
              id="outlined-name"
              label="Name"
              //   value={name}
              //   onChange={handleChange}
            />
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default AddProduct;
