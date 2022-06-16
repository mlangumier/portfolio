import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "Services/firebase";

import { MenuTop } from "Components/Menu";
import { logout, setUser } from "Redux/User/userSlice";
import { MenuItemsProfile } from "Components/Menu/menuItems";
import { ButtonSimple } from 'Components/Buttons'

import { PATH_LOGIN } from "Routes/CONSTANTS";
import { resetMovies } from "Redux/Movies/movieSlice";

import style from './style.module.scss'

export const ProfileLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state)
  const [ errors, setErrors ] = useState(null)
  // const [ userData, setUserData ] = useState({name: "Flibidi"})

  // const handleDeleteUser = async () => {
  //   const userRef = doc(database, "users", user?.id)
  //   await deleteDoc(userRef)
  //     .then(dispatch(resetUser()))
  // }

  // const handleUpdateUser = async () => {
  //   const userRef = doc(database, "users", user?.id)
  //   await updateDoc(userRef, userData)
  //     .then(setUser({ userData }))
  // }

  const handleLogout = () => {
    if (user?.name) {
      dispatch(logout())
      dispatch(resetMovies())
      navigate(PATH_LOGIN)
    } else {
      setErrors("*You are not connected")
    }
  }

  useEffect(() => {
    if (user?.name) {
      setErrors(null)
    }
  }, [])

  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsProfile} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
        <Typography component="h5" variant="h5">Welcome home, {user?.name || "traveller"}!</Typography>
        {/* <Button variant="outlined" onClick={() => handleDeleteUser()}>Delete</Button> */}
        {/* <Button variant="outlined" onClick={() => handleUpdateUser()}>Update</Button> */}
        <ButtonSimple text='Logout' handleClick={handleLogout} />
        <Typography 
          component="p" 
          variant="body1"
          className={style.errors}
        >{errors}</Typography>
      </Container>
    </React.Fragment>
  )
}