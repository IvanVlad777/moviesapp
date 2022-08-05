import React from 'react';
import Button from 'react-bootstrap/Button';

function LoadMoreButton(props) {
  return (
    <div>
      <Button variant="warning" onClick={props.setCanLoadMore}>
        Load more...
      </Button>
    </div>
  );
}

export default LoadMoreButton;
