<script setup>
import { useMoviesStore } from '../stores'

import MovieCard from '../components/MovieCard.vue'
import DummyText from '../components/DummyText.vue'

const store = useMoviesStore()
</script>
<template>
  <DummyText />
  <ul v-if="store.moviesResult" class="movies-list" :aria-busy="store.loading">
    <li v-for="movie in store.moviesResult" :key="movie.imdbID">
      <movie-card :movie="movie" type="search" />
    </li>
  </ul>
  <p>{{ store.searchError }}</p>
  <div class="collapse bg-base-200">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse bg-base-200">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse bg-base-200">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
</template>
