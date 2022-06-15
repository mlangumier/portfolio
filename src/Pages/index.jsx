import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar } from "Components/Navbar";

import style from './style.module.scss'

export const Layout = () => {
  const [ open, setOpen ] = useState(false);
  const [ navbarwidth, setNavbarWidth ] = useState(65);

  useEffect(() => {
    open ? setNavbarWidth(180) : setNavbarWidth(65);
  }, [open])

  return (
    <Box className={style.container}>
      <Navbar open={open} setOpen={setOpen} />
      <Box className="page-full" sx={{ width: `calc(100% - ${navbarwidth}px)`, flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  )
}