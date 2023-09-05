<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieByIdTMDB } from '../api'
import RatingScore from '../components/RatingScore.vue'
import { useMoviesStore } from '../stores'
import MovieImage from '../components/MovieImage.vue'
const store = useMoviesStore()
const route = useRoute()
const movieId = ref(route.params.id)
const movie = ref(null)
const error = ref(null)

onMounted(async () => {
  // Fetch movie details using the movie ID from the route
  store.loading = true
  try {
    const movieData = await fetchMovieByIdTMDB(movieId.value)
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
const releaseDate = computed(() => movie.value.release_date.substring(0, 4))
</script>
<template>
  <span v-if="store.loading" class="loading loading-spinner text-primary"></span>
  <div>movie {{ $route.params.id }}</div>
  <p v-if="error">error: {{ error }}</p>

  <div class="movie-detail" v-if="movie">
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <MovieImage :path="movie.poster_path" :title="movie.title" />
      </figure>
      <div class="card-body">
        <h1 class="card-title">{{ movie.title }}</h1>
        <RatingScore :score="movie.vote_average" />
        <div class="flex gap-2">
          <div>
            <p><strong>Date</strong></p>
            <span>{{ releaseDate }}</span>
          </div>
          <div>
            <p><strong>Genre</strong></p>
            <div v-for="genre in movie.genres" :key="genre.id">
              <span>{{ genre.name }}</span>
            </div>
          </div>
        </div>

        <div class="movie-info">
          <div class="movie-info-detail">
            <span>{{ movie.Runtime }}</span>
            <span>{{ movie.Year }}</span>
          </div>
        </div>
        <p>{{ movie.Plot }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-primary">Add to my list</button>
        </div>
      </div>
    </div>
    <div class="flex-initial"></div>
    <div class="flex-auto prose">
      <h1></h1>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
