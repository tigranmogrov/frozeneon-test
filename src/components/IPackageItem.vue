<script setup lang="ts">
import IChip from '@/components/IChip.vue';
import type { IPackage } from '@/types/package.types';

defineProps<{
  data: IPackage;
}>();
</script>

<template>
  <div :class="$style['item']">
    <div :class="$style['item-head']">
      <h3 :class="$style['item-title']">{{ data.name }}</h3>
      <div :class="$style['item-info']">
        <strong>{{ data.publisher.username }}</strong>
        <i-chip>
          Version <b>{{ data.version }}</b>
        </i-chip>
      </div>
    </div>
    <div></div>
    <p :class="$style['item-desc']">{{ data.description }}</p>
  </div>
</template>

<style module lang="scss">
.item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}
.item-head {
  > * {
    &:not(:first-child) {
      margin-top: 6px;
    }
  }
}
.item-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.item-title {
  font-size: 20px;
  line-height: 28px;
}

.item-desc {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
