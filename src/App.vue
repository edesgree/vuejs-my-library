<script setup>
import { RouterView } from 'vue-router'

import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <main class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12 space-y-8 lg:space-y-12">
    <HeaderNav />

    <RouterView />
  </main>
</template>
