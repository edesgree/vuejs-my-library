<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById } from '../api'
const route = useRoute()
const movie = ref({})

onMounted(async () => {
  // Fetch movie details using the movie ID from the route
  const movieId = route.params.id
  movie.value = await fetchMovieById(movieId)
  console.log('movie', movie)
})
</script>
<template>
  <h1>titile:{{ movie.Title }}</h1>
  <div>movie {{ $route.params.id }}</div>
  <div class="movie-detail">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h1>{{ movie.Title }}</h1>
    <p>{{ movie.Description }}</p>
    <!-- Add other movie details here -->
  </div>
</template>
