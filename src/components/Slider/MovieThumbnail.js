import React from 'react';
import { Link } from 'react-router-dom';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config.js';
import './MovieThumbnail.css';
import NoImage from './NoImage.jpg';

const MovieThumbnail = ({ movie, clickable, link }) => {
  const imageAvailable = `${movie.poster_path}`;
  return (
    <div className="item">
      {clickable && link ? (
        <Link to={`${movie.id}`}>
          <div>
            <img
              src={
                imageAvailable !== 'null'
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              alt={movie.id}
              key={movie.id}
            />
          </div>
        </Link>
      ) : (
        <img
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
          alt={movie.id}
          key={movie.id}
        />
      )}
    </div>
  );
};

export default MovieThumbnail;
