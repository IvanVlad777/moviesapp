import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../hooks/useMovieFetch';
import MovieBreadcrumb from './Breadcrumb/MovieBreadcrumb';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import MovieDetails from './MovieDetails/MovieDetails';

const Movie = (props) => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (error) return <div>Movie data did not load...</div>;

  if (loading)
    return (
      <div className="d-flex justify-content-center m-4">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <div style={{ marginTop: '4rem' }}>
      {
        <div
          className="bg-dark pt-4 p-2"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent, rgba(255,193,7) 100%), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="bg-dark mx-auto rounded-3"
            style={{ maxWidth: '1050px' }}
          >
            <MovieBreadcrumb movieTitle={movie.original_title} />
            <MovieDetails
              movie={movie}
              handleFavouriteMovie={props.handleFavouriteMovie}
              favourites={props.favourites}
              handleRemovalOfFavourite={props.handleRemovalOfFavourite}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Movie;
