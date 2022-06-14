import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PATH_FAVORITES, PATH_HOMEPAGE, PATH_LOGIN, PATH_MOVIES, PATH_PROFILE, PATH_WATCHLATER } from "./CONSTANTS";
import { Layout } from "Pages";
import { HomepageLayout } from "Pages/Home";
import { MoviesLayout } from "Pages/Movies";
import { Movies } from "Pages/Movies/Movies";
import { Favorites } from "Pages/Movies/Favorites";
import { WatchLater } from "Pages/Movies/WatchLater";
import { ProfileLayout } from "Pages/Profile"
import { LoginLayout } from 'Pages/Login'
import { ProtectedRoutes, USER_ROLE } from './ProtectedRoutes'

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_HOMEPAGE} element={<Layout />}>
          <Route index element={<HomepageLayout />} />
          <Route path={PATH_MOVIES} element={<ProtectedRoutes authorizations={[USER_ROLE.USER, USER_ROLE.ADMIN]} component={MoviesLayout} />}>
            <Route index element={<Movies />} />
            <Route path={PATH_FAVORITES} element={<Favorites />} />
            <Route path={PATH_WATCHLATER} element={<WatchLater />} />
          </Route>
          <Route path={PATH_PROFILE} element={<ProfileLayout />} />
          <Route path={PATH_LOGIN} element={<LoginLayout />} />
          <Route path='*' element={<HomepageLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}