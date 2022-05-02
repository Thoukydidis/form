import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./CreateNewPost.css";
import Modal from "@mui/material/Modal";
import CreateModalContent from "../components/CreateModalContent";

interface Props {
  // setSelectedUser: React.Dispatch<React.SetStateAction<number | undefined>>;
  // selectedUser: number | undefined;
}
const CreateNewPost = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div
      style={{
        width: "15%",
        marginRight: "15px",
      }}
    >
      <div style={{ display: "grid", justifyContent: "center" }}>
        <h1> Add Post</h1>
        <Button onClick={handleOpen}>
          <BorderColorIcon />
        </Button>
      </div>
      <Modal
        keepMounted
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <CreateModalContent />
      </Modal>
    </div>
  );
};

export default CreateNewPost;
