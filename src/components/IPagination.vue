<script setup lang="ts">
import { computed, defineProps } from 'vue';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  maxVisible: number;
}

const { totalPage, maxVisible, currentPage } = defineProps<PaginationProps>();
const emit = defineEmits(['updatePage']);

const calculateVisiblePages = () => {
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPage, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};

const visiblePages = computed(calculateVisiblePages);

const handleNextPage = (): void => {
  if (currentPage < totalPage) {
    emit('updatePage', currentPage + 1);
  }
};

const handlePrevPage = (): void => {
  if (currentPage > 1) {
    emit('updatePage', currentPage - 1);
  }
};

const handleGoToPage = (page: number): void => {
  emit('updatePage', page);
};
</script>

<template>
  <nav :class="$style.pagination">
    <ul :class="$style['pagination-list']">
      <li :class="$style['pagination-item']">
        <button
          :class="$style['pagination-btn']"
          :disabled="currentPage === 1"
          @click="handlePrevPage"
        >
          prev
        </button>
      </li>
      <li v-for="page in visiblePages" :key="page" :class="$style['pagination-item']">
        <button
          :class="[$style['pagination-btn'], { [$style['active']]: page === currentPage }]"
          @click="handleGoToPage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li :class="$style['pagination-item']">
        <button
          :class="$style['pagination-btn']"
          :disabled="currentPage === totalPage"
          @click="handleNextPage"
        >
          next
        </button>
      </li>
    </ul>
  </nav>
</template>

<style module lang="scss">
.pagination {
  display: block;
  width: 100%;
}

.pagination-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.pagination-item {
  display: block;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 15px;
    line-height: 18px;
  }
  @media (hover: hover) {
    transition: 0.4s;
    &:not(.active):hover {
      background-color: #eeee;
    }
  }

  &.active {
    pointer-events: none;
    background-color: #dedddded;
  }
}
</style>
