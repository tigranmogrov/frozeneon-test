<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import HomeView from '@/views/HomeView.vue';
</script>

<template>
  <app-header />
  <main :class="$style['main']">
    <home-view />
  </main>
  <app-footer />
</template>

<style module lang="scss">
.main {
  display: block;
  flex-grow: 1;
  width: 100%;
  max-width: 100%;
  min-height: 1px;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
