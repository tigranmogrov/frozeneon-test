<script setup lang="ts"></script>

<template>
  <div :class="$style['spinner']">
    <span :class="$style['spinner-icon']"></span>
    <h3>Loading data...</h3>
  </div>
</template>

<style module lang="scss">
.spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: calc(50% - 50px) calc(50% - 150px);
  width: 300px;
  height: 100px;
  z-index: 9999;
}

.spinner-icon {
  border: 5px solid #ccc;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
