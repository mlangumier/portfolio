import { useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useAppDispatch } from "Redux/hooks"
import { updateUsername } from "Redux/User/userSlice"

export const CreateUser = () => {
  const dispatch = useAppDispatch()
  const [ username, setUsername ] = useState<string>("")

  const onChangeUsername = (e:any) => {
    console.log(e)
    setUsername(e)
  }

  const handleSubmit = () => {
    dispatch(updateUsername({id: `${username}#9876`, name: username, isConfirmed:true, movies:[], todos:[]}))
    // SEARCH : redux argument of type is not assignable to parameter of type
    // Envoyer uniquement la variable/objet ?
    // Récupérer UserState par SELECTOR et le déconstruire dans setUsername + utiliser une fonction asynchrone pour lui ajouter 'isConfirmed' et lancer le dispatch 
    // dispatch(updateUsername({id: `${username}#9876`, name: username, isConfirmed:true}))
  }

  // SEARCH: then is not a fonction (~)

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
          {/* On click 'Meh...', put another label on btn */}
          <Box>
            <Button variant="outlined">Meh...</Button> 
            {/* <Button variant="outlined" onClick={() => handleStep(21)}>This one!</Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}