<script setup>
import RatingScore from './RatingScore.vue'
import MovieImage from './MovieImage.vue'
import BookmarkActionsNav from './BookmarkActionsNav.vue'
defineProps({
  type: String,
  movie: Object
})
</script>

<template>
  <div class="movie">
    <div class="movie-poster">
      <MovieImage :path="movie.poster_path" :title="movie.title" />
      <BookmarkActionsNav :movie="movie" :type="type" />
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
          <span>{{ movie.runtime + ' min' }}</span>
          <span>{{ movie.release_date.substring(0, 4) }}</span>
          <div class="movie-info-genres">
            <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</span>
          </div>
        </div>
      </div>
      <div class="movie-desc">{{ movie.tagline }}</div>
    </div>
  </div>
</template>
