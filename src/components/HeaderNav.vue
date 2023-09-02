<script setup>
import IconLogo from './icons/IconLogo.vue'
import IconHome from './icons/IconHome.vue'
import IconBookmark from './icons/IconBookmark.vue'
import SearchForm from './SearchForm.vue'
import IconSettings from './icons/IconSettings.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="bg-base-100">
    <div class="navbar">
      <div class="flex-1 logo-wrap">
        <a class="btn btn-dark normal-case text-xl"> <IconLogo /> </a>
        <p class="subtitle">keep a watch list</p>
      </div>
      <div class="flex-none gap-2">
        <SearchForm />
        <ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
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
    </div>
  </header>
</template>
