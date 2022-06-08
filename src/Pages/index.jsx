import { useEffect, useState } from "react";
import { Navbar } from "Components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Connection } from "Components/Connection";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { database } from "Services/firebase";
import { getUser, LOCAL_STORAGE_USER } from "Redux/User/userSlice";
// import { getAllUsers, getUser } from "Redux/User/userSlice";

export const Layout = () => {
  // const { user } = useSelector((state) => state)
  const [ open, setOpen ] = useState(false);
  const [ navbarwidth, setNavbarWidth ] = useState(65);
  const dispatch = useDispatch()

  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  useEffect(() => {
    //----- Get user on startup if localstorage (id)
    const fetchUser = async (id) => {
      const userRef = doc(database, "users", id)
      const data = await getDoc(userRef)
      dispatch(getUser(data.data()))
    }
    // const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER))
    // if (storage) fetchUser(storage?.id)

    //----- Function to get user with name (where)
    // const q = query(collection(db, "cities"), where("capital", "==", true));
  }, [])

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