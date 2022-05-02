import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Modal from "@mui/material/Modal";
import { createPost } from "../utils/postApiPosts";
import Typography from "@mui/material/Typography";

interface Props {
  // setSelectedUser: React.Dispatch<React.SetStateAction<number | undefined>>;
  // selectedUser: number | undefined;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const handleCreate = async () => {
  try {
    const payload = {};
    const response: any = await createPost(payload);
    // setUsers(response);
  } catch (e: any) {
    console.log(JSON.stringify(e));
  }
};

const CreateModalContent = (props: Props) => {
  return (
    <div>
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Please insert the appropriate information
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Lorem Ipsum here to add the input fields.
        </Typography>
        <Button onClick={handleCreate}>Create</Button>
      </Box>
    </div>
  );
};

export default CreateModalContent;
