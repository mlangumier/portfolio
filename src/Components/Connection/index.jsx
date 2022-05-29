import { useState } from "react";
import { randomNumber } from 'Functions/randomNumber'
import { SearchUser } from './SearchUser'
import { CreateUser } from './CreateUser'
import { Typography, Box, Modal } from "@mui/material";

const modalStyle = {
  position: 'absolute', // as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 240,
  bgcolor: 'background.paper',
  border: '2px solid #00',
  boxShadow: 24,
  p: 4,
};

const modalFlex = {
  textAlign:'center',
  display: 'flex',
}

export const Connection = () => {
  const [ userName, setUsername ] = useState("")
  const [ open, setOpen ] = useState(true);

  const handleOpen = () => setOpen(!open);
  
  const handleUserName = (inputName) => {
    setUsername(`${inputName || 'Mathieu'}#${randomNumber(100, 9999)}`)
  }


  return (
    <Box>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop
        // style={{backgroundColor:'rgba(0, 0, 0, 0.6)'}}
        sx={{flexGrow: 1}}
        >
          <Box sx={modalStyle}>
            <Box sx={modalFlex}>
              <SearchUser />
              <CreateUser />
            </Box>
            <Typography variant="body2" component="p">* Remember that you can modify you username at any time by visiting your Profile</Typography>
          </Box>
      </Modal>
    </Box>
  )
}
