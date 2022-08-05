import { useState, useEffect } from 'react';
import apiSettings from '../API';

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const useFetchNewest = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiSettings.fetchNewest(searchTerm, page);

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

  return { state, loading, error, searchTerm, setSearchTerm };
};
