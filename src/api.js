import axios from 'axios'

// fetch TMDB API with search query
// const TMDB_API_KEY = import.meta.env.TMDB_API_KEY
const VITE_TMDB_SECRET_KEY = import.meta.env.VITE_TMDB_SECRET_KEY
const TMDB_API_URL = 'https://api.themoviedb.org/3/'
const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${VITE_TMDB_SECRET_KEY}`
  }
}
export async function fetchMoviesTMDB(query) {
  try {
    console.log('TMDB_SECRET_KEY:', import.meta.env.TMDB_SECRET_KEY)
    const response = await axios.get(
      `${TMDB_API_URL}search/movie?include_adult=true&query=${query}`,
      TMDB_API_OPTIONS
    )
    const data = response.data
    console.log('search result TMDB', data)
    return data
  } catch (error) {
    console.error('Error fetching movies by query:', error)
    throw error
  } finally {
    console.log('done fetching movies by query with TMDB')
  }
}

// fetch TMDB API with movie ID, that gets more details than the one above
export async function fetchMovieByIdTMDB(id) {
  try {
    const response = await axios.get(`${TMDB_API_URL}movie/${id}`, TMDB_API_OPTIONS)
    const data = response.data
    console.log('(TMDB)  fetching movie by Id', data)
    return data
  } catch (error) {
    console.error('(TMDB) Error fetching movie by Id:', error)
    throw error
  } finally {
    console.log('(TMDB) Done fetching movie by Id')
  }
}
