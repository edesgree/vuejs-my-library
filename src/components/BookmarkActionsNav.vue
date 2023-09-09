<script setup>
import { useMoviesStore } from '../stores'
import IconBookmark from './icons/IconBookmark.vue'
import IconBookmarkFull from './icons/IconBookmarkFull.vue'
import IconSearch from './icons/IconSearch.vue'
const store = useMoviesStore()
defineProps({
  type: String,
  movie: Object
})
</script>
<template>
  <div class="bookmark-action">
    <div v-if="type == 'search'">
      <p v-if="movie.inWatchlist">in watch list</p>
      <button
        v-if="!movie.inWatchlist"
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
        class="tooltip join-item btn btn-secondary btn-outline btn-sm"
        data-tip="Mark as not watched"
        v-if="movie.isWatched && type == 'watchlist'"
        @click.prevent="store.markAsWatched(movie)"
      >
        ✅
      </button>
      <button
        v-else
        data-tip="Mark as watched"
        class="tooltip join-item btn btn-secondary btn-outline btn-sm"
        @click.prevent="store.markAsWatched(movie)"
      >
        👀
      </button>
      <button
        class="tooltip join-item btn btn-error btn-outline btn-sm"
        data-tip="Remove it!"
        @click.prevent="store.removeFromWatchlist(movie)"
      >
        ❌
      </button>

      <RouterLink
        data-tip="More information"
        class="tooltip join-item btn btn-secondary btn-outline btn-sm"
        :to="{
          name: 'movie',
          params: { id: movie.id }
        }"
      >
        <IconSearch />
      </RouterLink>
    </div>
  </div>
</template>
