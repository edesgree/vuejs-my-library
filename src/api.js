// fetch OMDB API with search query
const apiKEY = 'ce739ee3';

export async function fetchMovies(query) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKEY}&s=${query}`
    );
    const data = await response.json();
    console.log('search result', data);
    return data || [];
  } catch (err) {
    console.log(err);
  } finally {
    console.log('done');
  }
}

// fetch OMDB API with movie ID, that gets more details than the one above
export async function fetchMovieById(id) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKEY}&i=${id}&plot=short`
  );
  const data = await response.json();
  return data || [];
}
