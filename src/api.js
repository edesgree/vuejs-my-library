import axios from 'axios'
// fetch OMDB API with search query
const OMDB_API_KEY = 'ce739ee3'
const OMDB_API_URL = 'https://www.omdbapi.com/'
//const TMDB_API_KEY = '752ef76dcdb90b9bcadbc6a9a780ab28'
const TMDB_API_URL = 'https://api.themoviedb.org/3/'
const TMDB_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTJlZjc2ZGNkYjkwYjliY2FkYmM2YTlhNzgwYWIyOCIsInN1YiI6IjY0ZjY0YTI0NzdkMjNiMDEyZThjMDVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCpm9WJuz42jwhVfBGaBwP0K-q2PpUEZktlNksMMxzw'
  }
}
export async function fetchMoviesTMDB(query) {
  try {
    const response = await axios.get(
      `${TMDB_API_URL}search/movie?include_adult=true&query=${query}`,
      TMDB_API_OPTIONS
    )
    const data = response.data
    console.log('search result TMDB', data)
    return data || []
  } catch (err) {
    console.error('Error fetching movies by query:', err)
    throw new Error(err)
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
    return data || []
  } catch (err) {
    console.error('(TMDB) Error fetching movie by Id:', err)
    throw new Error(err)
  } finally {
    console.log('(TMDB) Done fetching movie by Id')
  }
}

export async function fetchMoviesOMDB(query) {
  try {
    const response = await axios.get(`${OMDB_API_URL}?apikey=${OMDB_API_KEY}&s=${query}`)
    const data = response.data
    console.log('search result OMDB', data)
    fetchMoviesTMDB(query)
    return data || []
  } catch (err) {
    console.error('Error fetching movies by query:', err)
    throw new Error(err)
  } finally {
    console.log('done fetching movies by query')
  }
}

// fetch OMDB API with movie ID, that gets more details than the one above
export async function fetchMovieByIdOMDB(id) {
  try {
    const response = await axios.get(`${OMDB_API_URL}?apikey=${OMDB_API_KEY}&i=${id}&plot=short`)
    const data = response.data
    return data || []
  } catch (err) {
    console.error('Error fetching movie by Id:', err)
    throw new Error(err)
  } finally {
    console.log('done fetching movie by Id')
  }
}
