<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import { usePackageStore } from '@/stores/package';
import HomeView from '@/views/HomeView.vue';
import { onMounted } from 'vue';

const packageStore = usePackageStore();
const { fetchPackages } = packageStore;

const currentParams = new URLSearchParams(window.location.search);
const textQuery: string = currentParams.get('text') || '';
const pageQuery: number = parseInt(currentParams.get('page') || '1');
const pageNumber = isNaN(pageQuery) ? 1 : pageQuery;
onMounted(() => {
  if (textQuery !== '') {
    fetchPackages(textQuery, pageNumber);
  }
});
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
