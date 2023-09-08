<script setup>
import iconPlaceholder from '../assets/img/placeholder.svg'
import { useMoviesStore } from '../stores'
const store = useMoviesStore()
defineProps({
  path: String,
  title: String
})
</script>
<template>
  <img
    :src="path === null ? iconPlaceholder : store.posterURL + path"
    :alt="title"
    class="poster"
  />
</template>
