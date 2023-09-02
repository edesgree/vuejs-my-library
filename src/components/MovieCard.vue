<script setup>
import { useMoviesStore } from '../stores'
import iconPlaceholder from '../assets/img/icon-film.svg'
import IconBookmark from './icons/IconBookmark.vue'
import IconBookmarkFull from './icons/IconBookmarkFull.vue'

defineProps({
  type: String,
  movie: Object
})
const store = useMoviesStore()
</script>

<template>
  <div class="movie">
    <div class="movie-poster">
      <RouterLink :to="{ name: 'movie', params: { id: movie.imdbID } }">
        coucou<span class="sr-only">View details for {{ movie.Title }}</span>
      </RouterLink>
      <span v-if="!movie.selected"></span>
      <div class="bookmark-action">
        <div v-if="type == 'search'">
          <button
            v-if="!movie.selected"
            class="btn btn-ghost btn-sm btn-bookmark"
            @click.prevent="store.addToWatchlist(movie)"
          >
            <IconBookmark />
          </button>
          <button
            v-else
            class="btn btn-ghost btn-sm btn-bookmark"
            @click.prevent="store.removeFromWatchlist(movie)"
          >
            <IconBookmarkFull />
          </button>
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

      <img
        :src="movie.Poster === 'N/A' ? iconPlaceholder : movie.Poster"
        :alt="movie.Title"
        class="poster"
      />
    </div>

    <div class="movie-details">
      <div class="movie-title">
        <h2 class="movie-title-text">{{ movie.Title }}{{ movie.plot }}</h2>
        <div class="movie-title-rating">
          ⭐ <span>{{ movie.imdbRating }}</span>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-info-detail">
          <span>{{ movie.Runtime }}</span>
          <span>{{ movie.Year }}</span>
          <span>{{ movie.Genre }}</span>
        </div>
      </div>
      <div class="movie-desc">{{ movie.Plot }}</div>
    </div>
  </div>
</template>
