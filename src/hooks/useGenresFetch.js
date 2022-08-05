import { useState, useEffect } from 'react';
import apiSettings from '../API';

export const useGenresFetch = () => {
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        setError(false);

        const { genres: genresList } = await apiSettings.fetchGenres();

        setGenres(genresList);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchGenres();
  }, []);

  return { genres, loading, error };
};
