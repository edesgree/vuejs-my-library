<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById } from '../api'
import RatingScore from '../components/RatingScore.vue'
import { useMoviesStore } from '../stores'

const store = useMoviesStore()
const route = useRoute()
const movieId = ref(route.params.id)
const movie = ref(null)
const error = ref(null)

onMounted(async () => {
  // Fetch movie details using the movie ID from the route
  store.loading = true
  try {
    const movieData = await fetchMovieById(movieId.value)
    console.log(store.loading)
    // Check for a specific error condition in the API response
    if (movieData.Error) {
      // Set a custom error message
      error.value = movieData.Error
    } else {
      movie.value = movieData
      console.log(movieData)
    }
  } catch (err) {
    // Handle other types of errors (e.g., network errors)
    error.value = 'An error occurred while fetching movie details'
    console.error(err.message)
  } finally {
    store.loading = false
  }
})
</script>
<template>
  <span v-if="store.loading" class="loading loading-spinner text-primary"></span>
  <div>movie {{ $route.params.id }}</div>
  <p v-if="error">error: {{ error }}</p>
  <div class="movie-detail" v-if="movie">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h1>{{ movie.Title }}</h1>
    <RatingScore :score="movie.imdbRating" />
    <div class="movie-info">
      <div class="movie-info-detail">
        <span>{{ movie.Runtime }}</span>
        <span>{{ movie.Year }}</span>
        <span>{{ movie.Genre }}</span>
      </div>
    </div>
    <p>{{ movie.Plot }}</p>
  </div>
</template>
