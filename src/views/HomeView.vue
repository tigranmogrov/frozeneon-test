<script setup lang="ts">
import IModal from '@/components/IModal.vue';
import IPackageItem from '@/components/IPackageItem.vue';
import IPagination from '@/components/IPagination.vue';
import ISpinner from '@/components/ISpinner.vue';
import { usePackageStore } from '@/stores/package';
import type { IPackage } from '@/types/package.types';
import { storeToRefs } from 'pinia';
import { computed, type ComputedRef, ref } from 'vue';

const packageStore = usePackageStore();
const { getPackages, getTotalPage, getSearchText, totalSize, isLoading, getCurrentPage } =
  storeToRefs(packageStore);

const { fetchPackages } = packageStore;
const isModalState = ref(false);
const modalContent = ref<IPackage | null>(null);

const showNotFound: ComputedRef<boolean> = computed<boolean>(
  () => totalSize.value <= 0 && getSearchText.value.length > 0
);

const openMoreInfo = (data: IPackage) => {
  isModalState.value = true;
  modalContent.value = data;
};
const fetchNewData = (page: number) => {
  fetchPackages(getSearchText.value, page);
};
</script>

<template>
  <div class="container">
    <i-spinner v-if="isLoading" />
    <template v-else>
      <div v-if="!showNotFound">
        <i-package-item
          v-for="data in getPackages"
          :key="data.name"
          :data="data"
          @click="openMoreInfo(data)"
        />
      </div>
      <h3 v-else>No packages found</h3>
      <i-pagination
        v-if="getTotalPage > 1"
        :total-page="getTotalPage"
        :max-visible="4"
        :current-page="getCurrentPage"
        @update-page="fetchNewData"
      />
    </template>
    <teleport to="body">
      <i-modal v-model="isModalState" :data="modalContent" />
    </teleport>
  </div>
</template>

<style module></style>
