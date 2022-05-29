import { useEffect, useState } from "react";
import { Navbar } from "Components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Connection } from "Components/Connection";
import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers, getUser } from "Redux/User/userSlice";

export const Layout = () => {
  // const user = useSelector((state) => state)
  const [ open, setOpen ] = useState(false);
  const [ navbarwidth, setNavbarWidth ] = useState(65);
  const dispatch = useDispatch()

  // console.log('State:', user)
  
  // useEffect(() => {
  //   open ? setNavbarWidth(180) : setNavbarWidth(65);
  // }, [open])

  // useEffect(() => {
  //   dispatch(getUser(8639))
  //   // dispatch(getAllUsers())
  // }, [dispatch])

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