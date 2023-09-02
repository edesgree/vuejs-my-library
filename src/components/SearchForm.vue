<script setup>
import { ref, watch, onMounted } from 'vue'

import { useMoviesStore } from '../stores'
import { fetchMovies, fetchMovieById } from '../api' // Import the fetchMovies function
import router from '../router'
import InputField from '../components/InputField.vue'

const store = useMoviesStore()
const search = ref('...')

// get API data
const handleSearch = async (searchQuery) => {
  store.loading = true
  store.moviesResult = []
  store.searchError = ''

  // redirect to home page with query string
  router.push({ path: '/', query: { q: searchQuery } })

  try {
    // first API call to get basic movie info
    const basicMovies = await fetchMovies(searchQuery)
    console.log('basicMovies', basicMovies)

    //display error if no movie found
    if (basicMovies.Error) {
      store.searchError = basicMovies.Error
    } else if (Array.isArray(basicMovies.Search)) {
      //loop through movies and fetch more detail by using a second API call (fetchMovieById)
      const detailedMovies = await Promise.all(
        basicMovies.Search.map(async (movie) => {
          const details = await fetchMovieById(movie.imdbID)
          //  complete the object with details and isWatched property to each movie object (gets true if matching ids)
          return {
            ...details,
            isWatched: store.myWatchList.some((m) => m.imdbID === movie.imdbID)
          }
        })
      )
      store.moviesResult = detailedMovies
    } else {
      store.searchError = 'unexpected error'
    }
  } catch (error) {
    console.log(error)
  } finally {
    store.loading = false
  }
}

// Watch for changes to the query parameter
watch(
  () => router.currentRoute.value.query.q,
  (newQuery) => {
    if (newQuery) {
      handleSearch(newQuery)
    }
  }
)

// Call handleSearch function on component mount if query parameter is present
onMounted(() => {
  const initialQuery = router.currentRoute.value.query.q
  if (initialQuery) {
    handleSearch(initialQuery)
  }
})
</script>
<template>
  <div class="form-control">
    <form method="post" action="#" class="search-form">
      <input-field
        unique="search"
        label="Search"
        class="input input-bordered w-24 md:w-auto"
        placeholder="Search for a movie"
        v-on:updated="search = $event"
      />
      <div class="submit-wrapper">
        <button @click.prevent="handleSearch(search)">Search</button>
      </div>
    </form>
  </div>
</template>
