import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { createUser } from "Redux/User/userSlice"
import { randomNumber } from "Functions/randomNumber"
import { useDispatch } from "react-redux"
import { doc, setDoc } from "firebase/firestore"
import { database } from "Services/firebase"
import { InputComponent } from 'Components/Forms/input'

export const CreateUser = () => {
  const dispatch = useDispatch()
  const [ userCustom, setUserCustom ] = useState("")
  const [ userRandom, setUserRandom ] = useState({})

  const createRandomUser = () => {
    const rand = randomNumber(1000,9999).toString()
    // Random names from list
    setUserRandom({ id: rand, name: "Randomer" })
    setUserCustom({ id: rand })
  }

  useEffect(() => {
    createRandomUser()
  }, [])

  const onChangeUsername = (target) => {
    setUserCustom({...userCustom, name: target?.value})
  }

  const handleSubmit = async (newUser) => {
    const userInfo = { id: newUser?.id, name: newUser?.name, isConfirmed:true }
    const userRef = doc(database, "users", userInfo?.id)
    await setDoc(userRef, userInfo)
      .then(dispatch(createUser(userInfo)))
  }

  return (
    <Box sx={{flex:1}}>
      <Typography variant="h5" component="p">Create a username </Typography>
      <Box>
        <Typography variant="body1" component="p">Choose a username </Typography>
        <Box>
          <InputComponent
            name="username"
            label="New username"
            variant="standard"
            value={userCustom?.name}
            onChange={onChangeUsername}
          />
          <Button variant="outlined" onClick={() => handleSubmit(userCustom)}>Create</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="body1" component="p">Or let me choose a username for you </Typography>
        <Box>
          <TextField id="standard-basic" label={`${userRandom?.name}#${userRandom?.id}`} variant="standard"  />
          <Box>
            <Button variant="outlined" onClick={() => createRandomUser()}>Meh...</Button> 
            <Button variant="outlined" onClick={() => handleSubmit(userRandom)}>This one!</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}