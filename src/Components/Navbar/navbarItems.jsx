import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import { HOMEPAGE, MOVIES } from 'Routes/CONSTANTS';

const NavbarItems = [
  // {
  //   name: 'Home',
  //   icon: <HomeIcon />,
  //   path: HOMEPAGE,
  // },
  {
    name: 'Movies',
    icon: <TheatersIcon />,
    path: MOVIES,
  },
]

export default NavbarItems