import React from 'react';
import MovieThumbnail from '../Slider/MovieThumbnail';
import './Favourites.css';

const Favorites = (props) => {
  return (
    <ul className="d-flex flex-column align-items-center flex-sm-row flex-sm-wrap justify-content-sm-around p-3 mx-0 favourites-list">
      {props.favourites[0] ? (
        <>
          {props.favourites.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieThumbnail movie={movie} clickable link />
              </li>
            );
          })}
        </>
      ) : (
        <li>No favourite movies selected</li>
      )}
    </ul>
  );
};
export default Favorites;
