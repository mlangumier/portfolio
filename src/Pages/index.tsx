import { useEffect, useState } from "react";
import { Navbar } from "Components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Connection } from "Components/Connection";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";
import { useAppDispatch } from "Redux/hooks";
import { getAllUsers, getUser } from "Redux/User/userSlice";

export const Layout = () => {
  const user = useSelector((state:RootState) => state.user)
  const [ open, setOpen ] = useState<boolean>(false);
  const [ navbarwidth, setNavbarWidth ] = useState<number>(65);
  const dispatch = useAppDispatch()

  // console.log('State:', user)
  
  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  useEffect(() => {
    dispatch(getUser(8639))
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