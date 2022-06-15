import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, Box, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { PATH_PROFILE } from "Routes/CONSTANTS";
import NavbarItems from './navbarItems'
import { firstLetterUppercase } from 'Functions/firstLetterUppercase'

import { Drawer, DrawerHeader } from './style.mui'
import style from './style.module.scss'

export const Navbar = ({ open, setOpen }) => {
  const { user } = useSelector(state => state)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
      <Drawer 
        variant="permanent" 
        open={open} 
        id="left-drawer"
        onMouseEnter={openDrawer}
        onMouseLeave={closeDrawer}
      >

        <DrawerHeader>
          {/* <IconButton> */}
            {/* {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          {/* </IconButton> */}
          <ListItemText 
            primary={user?.name} 
            sx={{ opacity: open ? 1 : 0, justifyContent: open ? 'initial' : 'center' }} 
          />
        </DrawerHeader>

        <Box className={style.navItems}>
          <List>
          {NavbarItems.map((item, index) => (
            <NavLink to={item?.path} key={`NavbarItem-${index}`} >
              <ListItemButton
                sx={{ justifyContent: open ? 'initial' : 'center' }}
                className={style.itemButton}
              >
                <ListItemIcon
                  sx={{ mr: open ? 1 : 'auto' }}
                  className={style.itemIcon}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  sx={{ opacity: open ? 1 : 0 }} 
                />
              </ListItemButton>
            </NavLink>
            ))}
          </List>
          <NavLink to={PATH_PROFILE} >
            <ListItemButton 
              sx={{ justifyContent: open ? 'initial' : 'center' }} 
              className={style.itemButton}
            >
              <ListItemIcon 
                sx={{ mr: open ? 1 : 'auto' }} 
                className={style.itemIcon}
              >
                <AccountCircleIcon className={style.profileIcon} />
              </ListItemIcon>
              <ListItemText 
                primary={'Account'} 
                sx={{ opacity: open ? 1 : 0 }} 
              />
            </ListItemButton>
          </NavLink>
        </Box>
      </Drawer>
  );
}