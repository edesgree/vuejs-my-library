<script setup>
import { useMoviesStore } from '../stores'

import MovieCardSimple from '../components/MovieCardSimple.vue'

const store = useMoviesStore()
</script>
<template>
  <span v-if="store.loading" class="loading loading-spinner text-primary"></span>

  <ul
    v-if="store.moviesResult.length > 0"
    class="movies-list movies-list-simple"
    :aria-busy="store.loading"
  >
    <li v-for="movie in store.moviesResult" :key="movie.id">
      <movie-card-simple :movie="movie" type="search" />
    </li>
  </ul>
  <p>{{ store.searchError }}</p>
</template>
