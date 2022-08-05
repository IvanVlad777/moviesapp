import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const FavouriteButton = (props) => {
  const isFavourite =
    props.favourites.filter((favourite) => {
      return favourite.id === props.movie.id;
    }).length !== 0;

  let label = 'Favourite';
  let preferdAction = props.handleFavouriteMovie;

  if (isFavourite == true) {
    label = 'Unfavourite';
    preferdAction = props.handleRemovalOfFavourite;
  }

  return (
    <Button
      className="m-3 h-25 border border-dark"
      variant="warning"
      onClick={() => preferdAction(props.movie)}
    >
      {label}
    </Button>
  );
};

export default FavouriteButton;
