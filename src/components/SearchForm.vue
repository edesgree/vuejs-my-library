<script setup>
import { ref, watch, onMounted } from 'vue'

import { useMoviesStore } from '../stores'
import { fetchMoviesTMDB, fetchMovieByIdTMDB } from '../api' // Import the fetchMovies function
import router from '../router'
import InputField from '../components/InputField.vue'
import IconSearch from '../components/icons/IconSearch.vue'
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
    const basicMovies = await fetchMoviesTMDB(searchQuery)

    //display error if no movie found
    if (basicMovies.Error || basicMovies.results.length === 0) {
      store.searchError = basicMovies.Error || 'Nothing found'
    } else if (Array.isArray(basicMovies.results)) {
      //loop through movies and fetch more detail by using a second API call (fetchMovieById)
      const detailedMovies = await Promise.all(
        basicMovies.results.map(async (movie) => {
          const details = await fetchMovieByIdTMDB(movie.id)
          //  complete the object with details, isWatched and inWatchlist property to each movie object (gets true if matching ids)
          return {
            ...details,
            inWatchlist: store.myWatchList.some((m) => m.id === movie.id),
            isWatched: store.myWatchList.some((m) => m.id === movie.id && m.isWatched)
          }
        })
      )
      // save promise result into store
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
  <form method="post" action="#" class="form-control search-form">
    <input-field
      unique="search"
      label="Search"
      classes="input rounded-full input-bordered w-full sm:w-auto join-item"
      placeholder="Search for a movie"
      v-on:updated="search = $event"
    />

    <button
      class="hidden btn-primary join-item rounded-r-full"
      @click.prevent="handleSearch(search)"
    >
      <IconSearch :class="`h-6 w-6`" />
      Search
    </button>
  </form>
</template>
