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

    // Check for a specific error condition in the API response
    if (movieData.Error) {
      // Set a custom error message
      error.value = movieData.Error
    } else {
      if (store.isInWatchlist(movieData)) {
        // add inWatchlist property to movie object if it is in watchlist
        movieData.inWatchlist = true
        movie.value = movieData
      } else {
        movie.value = movieData
      }
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
const runtime = computed(() => movie.value.runtime + ' min')
</script>
<template>
  <span v-if="store.loading" class="loading loading-spinner text-primary"></span>

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
            <div class="movie-info-genres">
              <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
            </div>
          </div>
        </div>

        <div class="movie-info">
          <div class="movie-info-detail">
            <span>{{ runtime }}</span>
          </div>
        </div>
        <p>{{ movie.overview }}</p>

        <div class="card-actions justify-end join">
          <button v-if="!movie.inWatchlist" class="join-item btn btn-sm btn-primary">
            Add to my list
          </button>
          <span v-else>movie already in watchlist</span>
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
