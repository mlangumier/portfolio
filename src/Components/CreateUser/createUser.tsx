import { useState } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import randomNumber from 'Functions/randomNumber'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const CreateUser = () => {
  const [ userName, setUsername ] = useState<string>("")

  const handleUserName = (inputName: string) => {
    setUsername(`${inputName}#${randomNumber(1000, 9999)}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body1" component="p">Welcome, {userName || "Traveller"}! Before we begin, do you already have a username on this website ?</Typography>
      <Grid container spacing={2} style={{textAlign:'center'}}>
        <Grid item xs={12} md={6}>
          <Button variant="outlined">Yes</Button>
          <FindUserame />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="outlined">No</Button>
          <CreateUsername />
        </Grid>
      </Grid>
    </Box>
  )
}

// YES
const FindUserame = () => {
  return (
    <Box>
      <Typography variant="body1" component="p">Search for your username</Typography>
      <Box>
        <TextField id="standard-basic" label="Mathieu#1234" variant="standard" />
        <Button variant="outlined">Confirm</Button>
      </Box>
      <Typography variant="body2" component="p">* Be aware that you can select or create another username by visiting your Profile</Typography>
    </Box>
  )
}

// NO
const CreateUsername = () => {
  return (
    <Box style={{border:'1px solid #999'}}>
      <Typography variant="body1" component="p">Let's create a username </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p">Choose a username </Typography>
          <Box>
            <TextField id="standard-basic" label="Username#1234" variant="standard" />
            <Button variant="outlined">Create</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p">Or let me choose a username for you </Typography>
          <Box>
            <TextField id="standard-basic" label="Aragorn#4947" variant="standard" />
            {/* On click 'Meh...', put another label on btn */}
            <Button variant="outlined">Meh...</Button> 
            <Button variant="outlined">This one!</Button>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" component="p">* Be aware that you can modify you username at any time by visiting your Profile</Typography>
    </Box>

  )
}