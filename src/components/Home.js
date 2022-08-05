import React from 'react';

import { Link } from 'react-router-dom';
import { useHomeFetch } from '../hooks/useHomeFetch';
import { useFetchNewest } from '../hooks/useFetchNewest';

import Button from 'react-bootstrap/Button';
import MovieSlider from './Slider/MovieSlider';
import Spinner from 'react-bootstrap/esm/Spinner';
import './Home.css';

const Home = (props) => {
  const {
    state: popMovies,
    loading: loadingPop,
    error: errorPop,
  } = useHomeFetch();
  const {
    state: newMovies,
    loading: loadingNew,
    error: errorNew,
  } = useFetchNewest();

  if (errorPop || errorNew) {
    return <div>Something went wrong...</div>;
  }
  if (loadingPop && loadingNew) {
    return (
      <div className="d-flex justify-content-center m-4">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column-reverse justify-content-around"
      style={{ marginTop: '5rem' }}
    >
      <div className="mx-auto my-2">
        <Link to="/discover">
          <Button variant="dark" className="discovery-button fs-2 p-3 m-2">
            Discover Movies
          </Button>
        </Link>
      </div>
      <div>
        {newMovies.results[0] ? (
          <div className="">
            <h2 className="bg-dark text-white p-1">Newest Movies</h2>
            <MovieSlider
              handleFavouriteMovie={props.handleFavouriteMovie}
              handleRemovalOfFavourite={props.handleRemovalOfFavourite}
              favourites={props.favourites}
              movieData={newMovies.results}
              link
              windowSize={props.windowSize}
            ></MovieSlider>
          </div>
        ) : null}
        {popMovies.results[0] ? (
          <div className="">
            <h2 className="bg-dark text-white p-1">Popular Movies</h2>
            <MovieSlider
              handleFavouriteMovie={props.handleFavouriteMovie}
              handleRemovalOfFavourite={props.handleRemovalOfFavourite}
              favourites={props.favourites}
              movieData={popMovies.results}
              link
              windowSize={props.windowSize}
            ></MovieSlider>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
