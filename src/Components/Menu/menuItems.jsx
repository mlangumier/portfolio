import { PATH_FAVORITES, PATH_MOVIES, PATH_WATCHLATER } from 'Routes/CONSTANTS';

const MenuItemsMovies = [
  {
    name: 'Movie Library',
    path: PATH_MOVIES,
  },
  {
    name: 'Favorites',
    path: PATH_FAVORITES,
  },
  {
    name: 'Watch Later',
    path: PATH_WATCHLATER,
  },
]

const MenuItemsHomepage = [
  {
    name: 'Intro',
    path: '#intro',
  },
  {
    name: 'Experience',
    path: '#experience',
  },
  {
    name: 'Hobbies',
    path: '#hobbies',
  },
  {
    name: 'Contact',
    path: '#contact',
  },
]

const MenuItemsProfile = [
  {
    name: 'Username',
    path: '',
  }
]

const MenuItemsLogin = [
  {
    name: 'Login',
    path: '',
  }
]

export { 
  MenuItemsMovies, 
  MenuItemsHomepage, 
  MenuItemsProfile, 
  MenuItemsLogin 
}