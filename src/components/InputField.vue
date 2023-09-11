<script setup>
import { ref } from 'vue'

defineProps({
  label: String,
  unique: String,
  classes: String,
  placeholder: String
})
const value = ref('')
</script>

<template>
  <div class="input-wrapper">
    <label :for="unique">{{ label }}</label>
    <input
      type="text"
      :id="unique"
      v-model="value"
      v-on:input="$emit('updated', value)"
      :class="classes"
      :placeholder="placeholder"
    />
  </div>
</template>
