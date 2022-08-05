import MainHeader from './components/MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Discover from './components/Discover';
import React, { useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowResize';

const App = () => {
  const size = useWindowSize();

  const [favourites, setFavourites] = useState([]);

  const saveToLoacalStorage = (items) => {
    localStorage.setItem('movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
    saveToLoacalStorage(newFavourites);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavourites = favourites.filter(
      (favourite) => movie.id !== favourite.id
    );

    setFavourites(newFavourites);

    saveToLoacalStorage(newFavourites);
  };

  useEffect(() => {
    let favouritesLocal = JSON.parse(
      localStorage.getItem('movie-app-favourites')
    );
    if (favouritesLocal === null) {
      favouritesLocal = [];
    }
    setFavourites(favouritesLocal);
  }, []);

  return (
    <Router>
      <div className="bg-warning">
        <MainHeader favourites={favourites} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleFavouriteMovie={addFavouriteMovie}
                handleRemovalOfFavourite={removeFavouriteMovie}
                favourites={favourites}
                windowSize={size}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <Discover
                handleFavouriteMovie={addFavouriteMovie}
                handleRemovalOfFavourite={removeFavouriteMovie}
                favourites={favourites}
                windowSize={size}
              />
            }
          />
          <Route
            path="/:movieId"
            element={
              <Movie
                handleFavouriteMovie={addFavouriteMovie}
                handleRemovalOfFavourite={removeFavouriteMovie}
                favourites={favourites}
              />
            }
          />
          <Route
            path="/discover/:movieId"
            element={
              <Movie
                handleFavouriteMovie={addFavouriteMovie}
                handleRemovalOfFavourite={removeFavouriteMovie}
                favourites={favourites}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
