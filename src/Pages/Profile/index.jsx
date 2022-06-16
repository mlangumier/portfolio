import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "Services/firebase";

import { MenuTop } from "Components/Menu";
import { logout, setUser } from "Redux/User/userSlice";
import { MenuItemsProfile } from "Components/Menu/menuItems";
import { ButtonSimple } from 'Components/Buttons'

import { PATH_LOGIN } from "Routes/CONSTANTS";

export const ProfileLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { user } = useSelector((state) => state)
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
    dispatch(logout())
    navigate(PATH_LOGIN)
  }

  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsProfile} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
        <div>User Profile Page - Work in progress</div>
        {/* <Button variant="outlined" onClick={() => handleDeleteUser()}>Delete</Button> */}
        {/* <Button variant="outlined" onClick={() => handleUpdateUser()}>Update</Button> */}
        <ButtonSimple text='Logout' handleClick={handleLogout} />
      </Container>
    </React.Fragment>
  )
}