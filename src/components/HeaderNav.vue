<script setup>
import IconHome from './icons/IconHome.vue'
import IconBookmark from './icons/IconBookmark.vue'
import IconBookmark2 from './icons/IconBookmark2.vue'

import IconSettings from './icons/IconSettings.vue'
import SearchForm from './SearchForm.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="bg-base-100">
    <div class="navbar">
      <div class="logo-wrap">
        <RouterLink class="btn btn-dark normal-case text-xl" aria-label="homepage" to="/">
          <IconBookmark2 /> <span>My Library<span class="text-primary">.</span></span>
        </RouterLink>
      </div>
      <SearchForm />
      <ul class="menu bg-base-200 items-center lg:menu-horizontal rounded-box">
        <li>
          <RouterLink aria-label="homepage" to="/">
            <IconHome />
          </RouterLink>
        </li>
        <li>
          <RouterLink aria-label="my list" to="/watchlist">
            <IconBookmark />
          </RouterLink>
        </li>
        <li>
          <RouterLink aria-label="settings" to="/settings">
            <IconSettings />
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
