import React from 'react';
import { Link } from 'react-router-dom';

function MovieBreadcrumb({ movieTitle }) {
  return (
    <div className="p-2 bg-dark text-white">
      <Link to="/">
        <span className="text-white">Home</span>
      </Link>
      <span className="px-2">\</span>
      <Link to="/discover">
        <span className="text-white">Discover</span>
      </Link>
      <span className="px-2">\</span>
      <span>{movieTitle}</span>
    </div>
  );
}

export default MovieBreadcrumb;
