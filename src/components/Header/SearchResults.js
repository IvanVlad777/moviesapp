import React from 'react';
import LoadMoreButton from './LoadMoreButton.js';
import Spinner from 'react-bootstrap/Spinner';
import MovieThumbnail from '../Slider/MovieThumbnail.js';
import './SearchResults.css';

function SearchResults(props) {
  if (props.dataIsLoading)
    return (
      <div className="d-flex justify-content-center m-4">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <div className="d-flex flex-wrap justify-content-around bg-dark bg-opacity-50 text-white position-absolute p-2 search-bar">
      {props.movieData.results.map((movie) => {
        return (
          <div className="search-item p-3 row" key={movie.id}>
            <MovieThumbnail movie={movie} clickable link />
            <div className="row">
              <p className="text-center">{movie.title}</p>
            </div>
          </div>
        );
      })}
      {props.dataIsLoading && <Spinner key={'spinner'} />}
      {props.movieData.page < props.movieData.total_pages &&
        !props.dataIsLoading && (
          <LoadMoreButton
            key={'loadMoreButton'}
            setCanLoadMore={() => props.setCanLoadMore(true)}
          />
        )}
    </div>
  );
}

export default SearchResults;
