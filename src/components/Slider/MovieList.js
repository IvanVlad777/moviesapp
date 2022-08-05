import React from 'react';
import { useDiscoverFetch } from '../../hooks/useDiscoverFetch';
import MovieSlider from './MovieSlider';
import Spinner from 'react-bootstrap/esm/Spinner';

const MovieList = (props) => {
  const uniqueId = props.genreId;
  const { movieList, loading, error } = useDiscoverFetch(uniqueId);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (loading)
    return (
      <div className="d-flex justify-content-center m-4">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <div>
      {movieList.results ? (
        <div className="col-12 me-5">
          <MovieSlider
            handleFavouriteMovie={props.handleFavouriteMovie}
            handleRemovalOfFavourite={props.handleRemovalOfFavourite}
            movieData={movieList.results}
            favourites={props.favourites}
            windowSize={props.windowSize}
            link
          ></MovieSlider>
        </div>
      ) : null}
    </div>
  );
};
export default MovieList;
