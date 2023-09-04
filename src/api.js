// fetch OMDB API with search query
const apiKEY = 'ce739ee3'

export async function fetchMovies(query) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKEY}&s=${query}`)
    const data = await response.json()
    console.log('search result', data)
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
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKEY}&i=${id}&plot=short`)
    const data = await response.json()
    return data || []
  } catch (err) {
    console.error('Error fetching movie by Id:', err)
    throw new Error(err)
  } finally {
    console.log('done fetching movie by Id')
  }
}
