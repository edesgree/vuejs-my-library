<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: {
    type: String,
    default: 'N/A' // Provide a default value
  }
})
const roundedScore = computed(() => parseFloat(props.score).toFixed(1))
</script>
<template>
  <span>⭐ {{ roundedScore }}</span>
</template>
