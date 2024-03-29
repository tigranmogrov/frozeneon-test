import type { IPackageState } from '@/types/package.types';
import { defineStore } from 'pinia';

export const usePackageStore = defineStore('package', {
  state: (): IPackageState => ({
    packages: [],
    searchText: '',
    totalSize: 0,
    currentPage: 1,
    limit: 10,
    isLoading: false
  })
});
