import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from './config';

//SettingDate
const today = new Date();
const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
  2,
  '0'
)}-${String(today.getDate()).padStart(2, '0')}`;

//API
const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchGenres: async () => {
    const genresEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(genresEndpoint)).json();
  },
  fetchDiscover: async (genreId) => {
    const discoverEndpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
    return await (await fetch(discoverEndpoint)).json();
  },
  fetchNewest: async () => {
    const latestEndpoint = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&release_date.lte=${date}`;
    return await (await fetch(latestEndpoint)).json();
  },
};

export default apiSettings;
