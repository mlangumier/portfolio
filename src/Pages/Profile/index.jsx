import React, { useState } from "react";
import { MenuItemsProfile } from "Components/Menu/menuItems";
import { MenuTop } from "Components/Menu";
import { Button, Container } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "Services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, setUser } from "Redux/User/userSlice";

export const ProfileLayout = () => {
  const { user } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [ userData, setUserData ] = useState({name: "Flibidi"})

  const handleDeleteUser = async () => {
    const userRef = doc(database, "users", user?.id)
    await deleteDoc(userRef)
      .then(dispatch(resetUser()))
  }

  const handleUpdateUser = async () => {
    const userRef = doc(database, "users", user?.id)
    await updateDoc(userRef, userData)
      .then(setUser({ userData }))
  }

  return (
    <React.Fragment>
      <MenuTop menuItems={MenuItemsProfile} />
      <Container className="page-content" maxWidth="xl" component="main" sx={{ p: 3 }}>
        <div>User Profile Page - Work in progress</div>
        {/* <Button variant="outlined" onClick={() => handleDeleteUser()}>Delete</Button> */}
        {/* <Button variant="outlined" onClick={() => handleUpdateUser()}>Update</Button> */}
      </Container>
    </React.Fragment>
  )
}