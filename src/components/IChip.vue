<script setup lang="ts"></script>

<template>
  <div :class="$style['chip']">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  line-height: 16px;
  min-height: 26px;
  min-width: 60px;
  color: #1c1b1b;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  padding: 2px 8px;
}
</style>
