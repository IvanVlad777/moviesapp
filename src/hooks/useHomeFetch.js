import { useState, useEffect } from 'react';
import apiSettings from '../API';

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [canLoadMore, setCanLoadMore] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiSettings.fetchMovies(searchTerm, page);

      setState((previousState) => ({
        ...movies,
        results:
          page > 1
            ? [previousState.results, ...movies.results]
            : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load more...
  useEffect(() => {
    if (!canLoadMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setCanLoadMore(false);
  }, [canLoadMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setCanLoadMore };
};
