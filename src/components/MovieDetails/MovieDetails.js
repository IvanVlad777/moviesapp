import React from 'react';
import MovieThumbnail from '../Slider/MovieThumbnail';
import FavouriteButton from '../Favourites/FavouriteButton.js';

const MovieDetails = (props) => {
  return (
    <>
      <div className="d-flex flex-column-reverse flex-lg-row bg-dark text-white px-3 pt-3 rounded-2">
        <div className="p-2">
          <MovieThumbnail movie={props.movie} />
        </div>

        <div className="p-2">
          <h1>
            {props.movie.title} ({props.movie.release_date.slice(0, 4)})
          </h1>
          <h3>Sinopsis</h3>
          <p>{props.movie.overview}</p>
          <div>
            <h3>Details</h3>
            <div className="d-flex flex-column-reverse flex-sm-row p-2">
              <div className="movie-director p-4 col-3">
                <h5>Director/s</h5>
                {props.movie.directors.map((director) => {
                  return <p key={director.credit_id}>{director.name}</p>;
                })}
              </div>
              <div className="movie-duration p-4 col-3">
                <h5>Duration</h5>
                <p>{props.movie.runtime} min</p>
              </div>
              <div className="movie-genres p-4 col-3">
                <h5>Genres</h5>
                {props.movie.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
              <FavouriteButton
                handleFavouriteMovie={props.handleFavouriteMovie}
                handleRemovalOfFavourite={props.handleRemovalOfFavourite}
                favourites={props.favourites}
                movie={props.movie}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="movie-cast mx-3 mb-3">
        <div>
          <h3 className="text-white">Cast</h3>
          <div className="d-flex flex-column flex-sm-wrap flex-sm-row px-2">
            {props.movie.actors.slice(0, 8).map((actor) => {
              return (
                <div key={actor.id} className="p-2 col-sm-3">
                  <p className="text-white px-2">
                    {actor.name} <span className="fw-bold text-white">as</span>
                  </p>

                  <p className="text-white px-2" key={actor.character}>
                    {actor.character}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
