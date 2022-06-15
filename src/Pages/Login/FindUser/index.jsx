import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "Services/firebase";
import { Box, Typography } from "@mui/material"

import { setUser } from 'Redux/User/userSlice'
import { InputComponent } from 'Components/Forms/input'
import { ButtonSimple } from 'Components/Buttons'
import { PATH_MOVIES } from 'Routes/CONSTANTS'

import style from './style.module.scss'

export const FindUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ username, setUsername ] = useState("")

  const handleInput = (target) => {
    setUsername(target.value.toLowerCase().trim())
  }

  const findUser = async () => {
    if (username.length > 0) {
      const userRef = doc(database, "users", username)
      const snap = await getDoc(userRef)
      if (snap.data()) {
        dispatch(setUser(snap.data()))
        navigate(PATH_MOVIES)
      }
    }
  }

  return (
    <Box className={style.container} >
      <Typography 
        component="h5" 
        variant="h6"
        className={style.title}
      >Look for an existing username</Typography>
      <Box className={style.form}>
        <InputComponent
          name="createUser"
          label="Find my username"
          value={username}
          onChange={handleInput}
        />
        <ButtonSimple text="Search" handleClick={findUser} />
      </Box>
    </Box>
  )
}