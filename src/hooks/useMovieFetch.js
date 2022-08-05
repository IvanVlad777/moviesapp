import { useState, useEffect } from 'react';
import apiSettings from '../API';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await apiSettings.fetchMovie(movieId);
        const credits = await apiSettings.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setState({ ...movie, actors: credits.cast, directors });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};
