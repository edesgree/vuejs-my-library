<script setup>
import { useMoviesStore } from '../stores'

import MovieCard from '../components/MovieCard.vue'
import DummyText from '../components/DummyText.vue'

const store = useMoviesStore()
</script>
<template>
  <span v-if="store.loading" class="loading loading-spinner text-primary"></span>

  <ul v-if="store.moviesResult" class="movies-list" :aria-busy="store.loading">
    <li v-for="movie in store.moviesResult" :key="movie.imdbID">
      <movie-card :movie="movie" type="search" />
    </li>
  </ul>
  <p>{{ store.searchError }}</p>
  <DummyText />
</template>
