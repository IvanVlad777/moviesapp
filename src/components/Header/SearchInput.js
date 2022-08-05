import React, { useEffect, useRef, useState } from 'react';
import SearchResults from './SearchResults';
//Hooks
import { useHomeFetch } from '../../hooks/useHomeFetch';
import './SearchInput.css';

function SearchInput() {
  const {
    state: movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setCanLoadMore,
  } = useHomeFetch();

  const [state, setState] = useState('');
  const [isActive, setIsActive] = useState(false);
  const initial = useRef(true);

  const toggleClass = (boolean) => {
    if (boolean) {
      const timer = setTimeout(() => {
        setIsActive(boolean);
        clearTimeout(timer);
      }, 100);
      return;
    }
    setIsActive(boolean);
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  if (error) {
    return <div>Something went wrong...</div>;
  }

  //Expanding
  let searchbarStyles = { position: 'relative' };

  return (
    <div className={searchbarStyles}>
      <div className="input-group w-75 mx-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Movie"
          aria-label="Search Movie"
          aria-describedby="button-addon2"
          onChange={(ev) => setState(ev.currentTarget.value)}
          value={state}
          onBlur={() => toggleClass(true)}
          onFocus={() => toggleClass(false)}
        />
      </div>
      <div className={isActive ? 'invisible' : null}>
        {searchTerm ? (
          <SearchResults
            movieData={movies}
            dataIsLoading={loading}
            setCanLoadMore={setCanLoadMore}
          />
        ) : null}
      </div>
    </div>
  );
}

export default SearchInput;
