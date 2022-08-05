import React from 'react';
import { useGenresFetch } from '../hooks/useGenresFetch';
import MovieList from './Slider/MovieList';
import Spinner from 'react-bootstrap/esm/Spinner';

const Discover = (props) => {
  const { genres, loading, error } = useGenresFetch();

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center m-4">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '5rem' }}>
      {genres[0] ? (
        <>
          {genres.map((genre) => {
            return (
              <div key={genre.id}>
                <h3 className="bg-dark text-white p-1">{genre.name}</h3>
                <MovieList
                  handleFavouriteMovie={props.handleFavouriteMovie}
                  handleRemovalOfFavourite={props.handleRemovalOfFavourite}
                  genreId={genre.id}
                  favourites={props.favourites}
                  windowSize={props.windowSize}
                />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Discover;
