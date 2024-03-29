import type { IPackage, IPackageState } from '@/types/package.types';
import { defineStore } from 'pinia';

export const usePackageStore = defineStore('package', {
  state: (): IPackageState => ({
    packages: [],
    searchText: '',
    totalSize: 0,
    currentPage: 1,
    limit: 10,
    isLoading: false
  }),
  getters: {
    getPackages: (state): IPackage[] => state.packages.map((pa) => pa.package),
    getTotalPage: (state): number => Math.ceil(state.totalSize / state.limit),
    getOffset: (state): number => (state.currentPage - 1) * state.limit,
    getCurrentPage: (state): number => state.currentPage,
    getSearchText: (state): string => state.searchText
  }
});
