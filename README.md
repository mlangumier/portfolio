# Dépendancies

## Installed
- TypeScript
- Jest
- Node sass
- React-redux
- React Router
- Axios
- Material UI & icons

## Coming soon
- Swiper
- Firebase
- i18n
- Redux Saga (action + side effects)
- JS Ramda (helps with map, filters)

# Model
- Starting point : https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22#7305
- Typescript : https://github.com/typescript-cheatsheets/react
- Styles : https://mui.com/system/styles/basics/

## Infos
- Site à multiples projets
- Base de donnée sur Firebase
- "Connexion" utilisateur en arrivant sur le site (nom/pseudo uniquement) ou créer un pseudo random

## Pages
- Home :
  - Présentation, photo
  - Parcours (timeline + click for details => modal)
  - Projects présents sur ce site
  - Poll (ex: what hobbies do you have?)
- Todo
  - List
  - Modify todo (+ id)
- Movies
  - Movies list: list all movies from api, ordered by release date. Can add to favorites or watch later
  - Favorites: list all favorite movies
  - Watch-later: list all movies to watch later
- Profile : see recap of all info on this website

## Composants
- Navbar-left (main): 
  - Responsive, can be opened (icons + names of all pages) or closed (icons of main pages)
- Navbar-top (secondary):
  - Content depends on mini-projects (Movies: all, favorites, watch later)
- Footer: 
  - Links all projects except the one current opened (url)

## Database
- User :
  - id
  - name
  - movie:
    - id
    - favorite
      - id
      - name
    - watch_later
      - id
      - name
  - todo_list:
    - id
    - task
    - is_done