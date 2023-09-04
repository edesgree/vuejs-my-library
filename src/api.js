import axios from 'axios'
// fetch OMDB API with search query
const OMDB_API_KEY = 'ce739ee3'
const OMDB_API_URL = 'https://www.omdbapi.com/'

export async function fetchMoviesTMDB(query) {
  const url = `https://api.themoviedb.org/3/discover/movie?with_keywords=${query}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTJlZjc2ZGNkYjkwYjliY2FkYmM2YTlhNzgwYWIyOCIsInN1YiI6IjY0ZjY0YTI0NzdkMjNiMDEyZThjMDVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCpm9WJuz42jwhVfBGaBwP0K-q2PpUEZktlNksMMxzw'
    }
  }
  try {
    const res = axios.get(url, options)
    const data = res.data
    console.log('search result TMDB', data)
    return data || []
  } catch (err) {
    console.error('Error fetching movies by query:', err)
    throw new Error(err)
  }
}

export async function fetchMovies(query) {
  try {
    const response = await axios.get(`${OMDB_API_URL}?apikey=${OMDB_API_KEY}&s=${query}`)
    const data = response.data
    console.log('search result OMDB', data)

    return data || []
  } catch (err) {
    console.error('Error fetching movies by query:', err)
    throw new Error(err)
  } finally {
    console.log('done fetching movies by query')
  }
}

// fetch OMDB API with movie ID, that gets more details than the one above
export async function fetchMovieById(id) {
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
