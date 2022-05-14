import { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useAppDispatch } from "Redux/hooks"
import { createUser } from "Redux/User/userSlice"
import { randomNumber } from "Functions/randomNumber"

export const CreateUser = () => {
  const dispatch = useAppDispatch()
  const [ username, setUsername ] = useState<string>("")

  const onChangeUsername = (e:any) => {
    setUsername(e)
  }

  const handleSubmit = () => {
    const rand = randomNumber(1000,9999)
    dispatch(createUser({id: `${rand}`, name: username, isConfirmed:true}))
  }

  return (
    <Box sx={{flex:1}}>
      {/* <Button variant="outlined" onClick={() => handleStep(10)}>Wait! I already have a username!</Button> */}
      <Typography variant="h5" component="p">Create a username </Typography>
      <Box>
        <Typography variant="body1" component="p">Choose a username </Typography>
        <Box>
          <TextField 
            name="username" 
            label="New username" 
            variant="standard" 
            value={username} 
            onChange={(e) => onChangeUsername(e?.target?.value)} 
          />
          <Button variant="outlined" onClick={() => handleSubmit()}>Create</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="body1" component="p">Or let me choose a username for you </Typography>
        <Box>
          <TextField id="standard-basic" label="Aragorn#4947" variant="standard" />
          {/* On click 'Meh...', put another label on btn (reload) */}
          <Box>
            <Button variant="outlined">Meh...</Button> 
            {/* <Button variant="outlined" onClick={() => handleStep(21)}>This one!</Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}