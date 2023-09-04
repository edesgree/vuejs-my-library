<script setup>
import { useMoviesStore } from '../stores'
import MovieCard from '../components/MovieCard.vue'
const store = useMoviesStore()
console.log('myWatchList', store.myWatchList)
</script>
<template>
  <h1>My watch list</h1>

  <ul class="movies-list" v-if="store.myWatchList.length > 0">
    <li v-for="movie in store.myWatchList" :key="movie.id">
      <movie-card :movie="movie" type="watchlist" />
    </li>
  </ul>
  <p v-else>Nothing to watch yet</p>
</template>
