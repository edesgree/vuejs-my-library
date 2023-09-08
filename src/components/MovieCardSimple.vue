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
  <div class="movie movie-simple">
    <div class="movie-poster">
      <RouterLink
        class="s"
        :to="{
          name: 'movie',
          params: { id: movie.id }
        }"
      >
        <MovieImage :path="movie.poster_path" :title="movie.title" />
      </RouterLink>
      <BookmarkActionsNav :movie="movie" :type="type" />
    </div>

    <div class="movie-details">
      <div class="movie-title">
        <h2 class="movie-title-text">
          <RouterLink
            class="s"
            :to="{
              name: 'movie',
              params: { id: movie.id }
            }"
          >
            {{ movie.title }}
          </RouterLink>
        </h2>
        <div class="movie-title-rating">
          <RatingScore :score="movie.vote_average" />
        </div>
      </div>
    </div>
  </div>
</template>
