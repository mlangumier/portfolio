import { FAVORITES, MOVIES, WATCHLATER } from 'Routes/CONSTANTS';

const MenuItemsMovies = [
  {
    name: 'Movie Library',
    path: MOVIES,
  },
  {
    name: 'Favorites',
    path: FAVORITES,
  },
  {
    name: 'Watch Later',
    path: WATCHLATER,
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

export { MenuItemsMovies, MenuItemsHomepage, MenuItemsProfile }