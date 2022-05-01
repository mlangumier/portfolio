import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import randomNumber from 'Functions/randomNumber'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 240,
  bgcolor: 'background.paper',
  border: '2px solid #00',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};

type handleStepProp = {
  handleStep: (step: number) => void; 
}

export const WelcomeUser = () => {
  const [ userName, setUsername ] = useState<string>("")
  const [ open, setOpen ] = useState<boolean>(true);
  const [ step, setStep ] = useState<number>(0)
  
  const handleUserName = (inputName: string) => {
    setUsername(`${inputName || 'Mathieu'}#${randomNumber(100, 9999)}`)
  }

  const handleOpen = () => setOpen(!open);

  const handleStep = (step: number) => {
    setStep(step)
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
            {
              // Retourner directement le composant en return de la fonction et virer tout ce merdier
              // Parce qu'en plus je peux pas passer de props correctement avec ces conneries...
              step === 0 && <Welcome handleStep={handleStep} /> ||
              step === 10 && <FindUserame handleStep={handleStep} /> ||
              step === 11 && <FoundUsername handleStep={handleStep} /> ||
              step === 12 && <WelcomeBack /> ||
              step === 20 && <CreateUsername handleStep={handleStep} /> || 
              step === 21 && <ConfirmUsername handleStep={handleStep} /> ||
              step === 22 && <WelcomeNew />
            }
          </Box>
      </Modal>
    </Box>
  )
}


//EXIST OR NOT?
const Welcome = (props: handleStepProp) => {
  const { handleStep } = props
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Welcome!</Typography>
      <Typography variant="body1" component="p">Before we begin, have you ever created a username on this website ?</Typography>
      <Grid container spacing={2} style={{textAlign:'center'}}>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={() => handleStep(10)}>Yes</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={() => handleStep(20)}>No</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

// EXIST
const FindUserame = (props: handleStepProp) => {
  const { handleStep } = props
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={() => handleStep(20)}>I want to create a new username</Button>
      <Typography variant="h5" component="p">Find your username:</Typography>
      <Box>
        <TextField id="standard-basic" label="Mathieu#1234" variant="standard" />
        <Button variant="outlined"  onClick={() => handleStep(11)}>Confirm</Button>
      </Box>
      <Typography variant="body2" component="p">* Remember that you can select or create another username at any time by visiting your Profile</Typography>
    </React.Fragment>
  )
}
// FOUND
const FoundUsername = (props: handleStepProp) => {
  const { handleStep } = props
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Are you {'username'} ?</Typography>
      <Box>
        <Button variant="outlined" onClick={() => handleStep(12)}>It's a me!</Button>
        <Button variant="outlined" onClick={() => handleStep(10)}>No, search again</Button>
        <Button variant="outlined" onClick={() => handleStep(20)}>Create new username</Button>
      </Box>
    </React.Fragment>
  )
}
// LOGGED IN
const WelcomeBack = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Welcome back, {'username'}!</Typography>
      <Typography variant="body2" component="p">* Remember that you can modify you username or create a new one at any time by visiting your Profile</Typography>
    </React.Fragment>
  )
}

// CREATE
const CreateUsername = (props: handleStepProp) => {
  const { handleStep } = props
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={() => handleStep(10)}>Wait! I already have a username!</Button>
      <Typography variant="h5" component="p">Let's create a username </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p">Choose a username </Typography>
          <Box>
            <TextField id="standard-basic" label="Username#1234" variant="standard" />
            <Button variant="outlined" onClick={() => handleStep(21)}>Create</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p">Or let me choose a username for you </Typography>
          <Box>
            <TextField id="standard-basic" label="Aragorn#4947" variant="standard" />
            {/* On click 'Meh...', put another label on btn */}
            <Box>
              <Button variant="outlined">Meh...</Button> 
              <Button variant="outlined" onClick={() => handleStep(21)}>This one!</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" component="p">* Remember that you can modify you username at any time by visiting your Profile</Typography>
    </React.Fragment>
  )
}
// CONFIRM CREATION
const ConfirmUsername = (props: handleStepProp) => {
  const { handleStep } = props
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Will that be your username?</Typography>
      <Box>
      <Button variant="outlined" onClick={() => handleStep(22)}>Yes!</Button>
      <Button variant="outlined" onClick={() => handleStep(20)}>Let me rethink that...</Button>
      <Button variant="outlined" onClick={() => handleStep(10)}>Actually, i already have a username...</Button>
      </Box>
    </React.Fragment>
  )
}

// WELCOME NEW USER
// LOGGED IN
const WelcomeNew = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" component="p">Then welcome, {'username'}!</Typography>
      <Typography variant="body2" component="p">* Remember that you can modify you username or create a new one at any time by visiting your Profile</Typography>

    </React.Fragment>
  )
}