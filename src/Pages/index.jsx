import { useEffect, useState } from "react";
import { Navbar } from "Components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [ open, setOpen ] = useState(false);
  const [ navbarwidth, setNavbarWidth ] = useState(65);

  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" style={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  )
}