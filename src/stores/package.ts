import { API } from '@/api/axios';
import type { IPackage, IPackageData, IPackageState } from '@/types/package.types';
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
  },
  actions: {
    async fetchPackages(searchText: string, page: number = 1): Promise<void> {
      try {
        this.isLoading = true;
        this.setSearchText(searchText);
        this.setCurrentPage(page);
        this.updateUrlParams();

        const {
          data: { objects, total }
        }: { data: IPackageData } = await API.get('/v1/search', {
          params: {
            text: this.searchText,
            from: this.getOffset,
            size: this.limit
          }
        });
        this.packages = objects;
        this.totalSize = total;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    setSearchText(searchString: string) {
      this.searchText = searchString.length ? searchString : '';
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    setUrlParam(params: URLSearchParams, key: string, value: string): void {
      if (key === 'page' && Number(value) === 1) {
        params.delete(key);
      } else if (value.trim()) {
        params.set(key, value.trim());
      } else {
        params.delete(key);
      }
    },
    mergeUrlParams(params: URLSearchParams, currentParams: URLSearchParams): void {
      currentParams.forEach((value, key) => {
        if (!params.has(key)) {
          params.set(key, value);
        }
      });
    },
    updateUrlParams(): void {
      const params = new URLSearchParams();
      const currentParams = new URLSearchParams(window.location.search);

      this.mergeUrlParams(params, currentParams);

      this.setUrlParam(params, 'text', this.searchText);
      this.setUrlParam(params, 'page', String(this.currentPage));

      const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;

      window.history.replaceState({}, '', newUrl);
    }
  }
});
