<script setup lang="ts">
import LogoImg from '@/assets/logo.png';
import IInput from '@/components/IInput.vue';
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<template>
  <header :class="$style['header']">
    <img :src="LogoImg" alt="Logo" />
    <i-input v-model:value="searchQuery" />
  </header>
</template>

<style module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1366px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  img {
    display: block;
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
}
</style>
