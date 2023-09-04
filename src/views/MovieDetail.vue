<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById } from '../api'
const route = useRoute()
const movieId = ref(route.params.id)
const movie = ref(null)
const error = ref(null)

onMounted(async () => {
  // Fetch movie details using the movie ID from the route
  try {
    const movieData = await fetchMovieById(movieId.value)

    // Check for a specific error condition in the API response
    if (movieData.Error) {
      // Set a custom error message
      error.value = movieData.Error
    } else {
      movie.value = movieData
    }
  } catch (err) {
    // Handle other types of errors (e.g., network errors)
    error.value = 'An error occurred while fetching movie details'
    console.error(err.message)
  }
})
</script>
<template>
  <div>movie {{ $route.params.id }}</div>
  <p v-if="error">error: {{ error }}</p>
  <div class="movie-detail" v-if="movie">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h1>{{ movie.Title }}</h1>
    <p>{{ movie.Plot }}</p>
  </div>
</template>
