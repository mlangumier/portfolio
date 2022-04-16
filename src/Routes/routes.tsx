import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "Pages/Home/homepage";
import Movies from "Pages/Movies/movies";
import { FAVORITES, HOMEPAGE, MOVIEDETAILS, MOVIES, WATCHLATER } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={HOMEPAGE} element={<Homepage />} />
          <Route path={MOVIES} element={<Movies />}>
            {/* <Route path={MOVIEDETAILS} element={<MovieDetails />} /> */}
            {/* <Route path={FAVORITES} element={<Favorites />} /> */}
            {/* <Route path={WATCHLATER} element={<WatchLater />} /> */}
          </Route>
          <Route path='*' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RouterConfig;