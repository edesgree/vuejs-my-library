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
//const inWatchlist = ref(false) // Define inWatchlist as a ref

onMounted(async () => {
  // Fetch movie details using the movie ID from the route
  store.loading = true
  try {
    const movieData = await fetchMovieByIdTMDB(movieId.value)
    console.log('le movieData', movieData)
    // Check for a specific error condition in the API response
    if (movieData.Error) {
      // Set a custom error message
      error.value = movieData.Error
    } else {
      // Set the movie data
      movie.value = {
        ...movieData,
        inWatchlist: store.isInWatchlist(movieData), // Set inWatchlist as a ref here
        isWatched: store.isWatched(movieData) // Set isWatched as a ref here
      }

      console.log('le movie', movie.value)
    }
  } catch (err) {
    // Handle other types of errors (e.g., network errors)
    error.value = 'An error occurred while fetching movie details: ' + err.message
    console.error('API Error:', err)
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

  <div class="movie-detailed-view" v-if="movie">
    <div
      class="card card-side bg-base-100 shadow-xl"
      :style="{ backgroundImage: `url(${store.posterURL + movie.backdrop_path})` }"
    >
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

        <div class="card-actions justify-end">
          <button
            v-if="!store.isInWatchlist(movie)"
            @click.prevent="store.addToWatchlist(movie)"
            class="btn btn-sm btn-primary"
          >
            Add to my list
          </button>
          <button
            v-else
            @click.prevent="store.removeFromWatchlist(movie)"
            class="btn btn-sm btn-secondary"
          >
            ❌ Remove
          </button>
        </div>
        <template v-if="store.isInWatchlist(movie)">
          <div class="form-control">
            <label class="label cursor-pointer justify-end gap-2">
              <span class="label-text">Movie watched 👀 </span>
              <input
                type="checkbox"
                class="toggle toggle-primary"
                :checked="movie.isWatched"
                @change="store.markAsWatched(movie)"
              />
            </label>
          </div>
        </template>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
<style scoped>
.card {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  background-position: center top;
}
.card figure,
.card .card-body {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
