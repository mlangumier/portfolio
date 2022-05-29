import { useEffect, useState } from "react";
import { Navbar } from "Components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Connection } from "Components/Connection";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { database } from "Services/firebase";
import { getUser } from "Redux/User/userSlice";
// import { getAllUsers, getUser } from "Redux/User/userSlice";

export const Layout = () => {
  // const { user } = useSelector((state) => state)
  const [ open, setOpen ] = useState(false);
  const [ navbarwidth, setNavbarWidth ] = useState(65);
  const dispatch = useDispatch()

  // console.log('State:', user)
  
  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  useEffect(() => {
    //------------------------- Get ONE user
    const fetchUser = async (id) => {
      const userRef = doc(database, "users", id)
      const data = await getDoc(userRef)
      dispatch(getUser(data.data()))
    }
    fetchUser("5535")
    //------------------------- Get ALL users
    const getUsers = async () => {
      const usersRef = collection(database, "users")
      const data = await getDocs(usersRef)
      // console.log('DATA ALL:', data.docs) //+ map on doc.data()
      // dispatch(getAllUsers())
    }
    // getUsers()
    // Double render issue
  }, [dispatch])

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" style={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
        <Outlet />
      </Box>
      {/* Check localStorage, if empty, <Connection /> */}
      <Connection />
    </Box>
  )
}