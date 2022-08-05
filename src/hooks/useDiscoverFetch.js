import { useState, useEffect } from 'react';
import apiSettings from '../API';

export const useDiscoverFetch = (genreId) => {
  const [movieList, setMovieList] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDiscover = async () => {
      try {
        setLoading(true);
        setError(false);

        const discover = await apiSettings.fetchDiscover(genreId);

        setMovieList(discover);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchDiscover();
  }, [genreId]);

  return { movieList, loading, error };
};
