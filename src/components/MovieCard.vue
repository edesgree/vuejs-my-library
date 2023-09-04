<script setup>
import { useMoviesStore } from '../stores'

import IconBookmark from './icons/IconBookmark.vue'
import IconBookmarkFull from './icons/IconBookmarkFull.vue'
import RatingScore from './RatingScore.vue'
import MovieImage from './MovieImage.vue'
defineProps({
  type: String,
  movie: Object
})
const store = useMoviesStore()
</script>

<template>
  <div class="movie">
    <div class="movie-poster">
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
        <div class="join" v-else>
          <button
            class="join-item btn btn-secondary btn-outline btn-sm"
            data-tooltip="seen it!"
            v-if="movie.isWatched && type == 'watchlist'"
            disabled
          >
            ✅
          </button>
          <button
            v-else
            data-tooltip="I have watched it!"
            class="join-item btn btn-secondary btn-outline btn-sm"
            @click.prevent="store.markAsWatched(movie)"
          >
            👀
          </button>
          <button
            class="join-item btn btn-error btn-outline btn-sm"
            data-tooltip="Remove it!"
            @click.prevent="store.removeFromWatchlist(movie)"
          >
            ❌
          </button>
        </div>
      </div>

      <MovieImage :path="movie.poster_path" :title="movie.title" />
    </div>

    <div class="movie-details">
      <div class="movie-title">
        <h2 class="movie-title-text">{{ movie.title }}</h2>
        <div class="movie-title-rating">
          <RatingScore :score="movie.vote_average" />
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-info-detail">
          <span>{{ movie.Runtime }}</span>
          <span>{{ movie.Year }}</span>
          <span>{{ movie.Genre }}</span>
        </div>
      </div>
      <div class="movie-desc">{{ movie.overview }}</div>

      <RouterLink
        class="btn btn-xs"
        :to="{
          name: 'movie',
          params: { id: movie.id }
        }"
      >
        more info
      </RouterLink>
    </div>
  </div>
</template>
