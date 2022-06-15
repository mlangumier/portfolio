import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, FormGroup, Typography } from "@mui/material"
import { doc, setDoc, getDoc } from "firebase/firestore";

import { setUser } from 'Redux/User/userSlice'
import { database } from "Services/firebase";
import { InputComponent } from 'Components/Forms/input'
import { ButtonSimple } from 'Components/Buttons'
import { randomNumber } from 'Functions/randomNumber'
import { PATH_MOVIES } from 'Routes/CONSTANTS'

import style from './style.module.scss'

export const CreateUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ username, setUsername ] = useState("")
  const [ error, setError ] = useState(null)

  const handleInput = (target) => {
    setUsername(target.value.toLowerCase().trim())
  }

  const createUser = async () => {
    const user = { 
      name: username,
      role: "user",
    }
    if (user.name.length > 0) {
      const userRef = doc(database, "users", user.name)
      const snap = await getDoc(userRef)
      if (snap.data()) {
        setError('*This user already exists. Please choose another username')
      } else {
        await setDoc(doc(database, 'users', user.name), user)
          .then(setError(null))
          .then(dispatch(setUser(user)))
          .then(navigate(PATH_MOVIES))
      }
    }
  }

  return (
    <FormGroup component="form" className={style.container} >
      <Typography 
        component="h5" 
        variant="h6"
        className={style.title}
      >Create a new user</Typography>
      <Box className={style.form}>
        <InputComponent
          name="createUser"
          label="New username"
          value={username}
          onChange={handleInput}
        />
        <ButtonSimple text="Create" handleClick={createUser} />
      </Box>
      <Typography 
        component="p" 
        variant="body2"
        className={style.error}
      >
        {error}
      </Typography>
    </FormGroup>
  )
}