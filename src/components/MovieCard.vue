<script setup>
import { useMoviesStore } from '../stores'
import iconPlaceholder from '../assets/img/icon-film.svg'

defineProps({
  type: String,
  movie: Object
})
const store = useMoviesStore()
</script>

<template>
  <div class="movie">
    <img
      :src="movie.Poster === 'N/A' ? iconPlaceholder : movie.Poster"
      :alt="movie.Title"
      class="poster"
    />
    <div class="movie-details">
      <div class="movie-title">
        <h2 class="movie-title-text">{{ movie.Title }}{{ movie.plot }}</h2>
        <div class="movie-title-rating">
          ⭐ <span>{{ movie.imdbRating }}</span>
        </div>
      </div>
      <div class="movie-info">
        <span>{{ movie.Runtime }}</span>
        <span>{{ movie.Year }}</span>
        <div v-if="type == 'search'">
          <button
            v-if="!movie.selected"
            class="btn-sm"
            @click.prevent="store.addToWatchlist(movie)"
            :disabled="movie.selected"
          >
            ❤️
          </button>
          <span v-else>💛</span>
        </div>
        <div class="buttons-group" v-else>
          <button
            class="btn-sm"
            data-tooltip="seen it!"
            v-if="movie.isWatched && type == 'watchlist'"
            disabled
          >
            ✅
          </button>
          <button
            v-else
            data-tooltip="I have watched it!"
            class="btn-sm"
            @click.prevent="store.markAsWatched(movie)"
          >
            👀
          </button>
          <button
            class="btn-sm"
            data-tooltip="Remove it!"
            @click.prevent="store.removeFromWatchlist(movie)"
          >
            ❌
          </button>
        </div>
      </div>
      <div class="movie-desc">{{ movie.Plot }}</div>
    </div>
  </div>
</template>
