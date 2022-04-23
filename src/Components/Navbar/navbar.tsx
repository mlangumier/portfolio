import { Dispatch, FC, SetStateAction } from "react"
import { NavLink } from 'react-router-dom';
import NavbarItems from './navbarItems'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PROFILE } from "Routes/CONSTANTS";

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type isNavbarOpen = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: FC<isNavbarOpen> = ({ open, setOpen }) => {

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
      <Drawer variant="permanent" open={open} id="left-drawer">

        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Box style={{margin:'50px 0', display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%'}}>
          <List>
          {NavbarItems.map((item, index) => (
            <NavLink to={item?.path} key={`NavbarItem-${index}`} >
              <ListItemButton
                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NavLink>
            ))}
          </List>
          <NavLink to={PROFILE} >
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }} >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }} >
                <AccountCircleIcon style={{color:'#666'}} />
              </ListItemIcon>
              <ListItemText primary={'Account'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </NavLink>
        </Box>

      </Drawer>
  );
}
export default Navbar