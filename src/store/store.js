import { create } from "zustand";
import { createCatalogSlice } from "./slices/catalogSlice";
import { createFilterSlice } from "./slices/filterSlice";

export const useCatalogStore = create((...args) => ({
  ...createCatalogSlice(...args),
  ...createFilterSlice(...args),
}));

export const useSortingStore = create((set) => ({
  sorting: 'grid',

  toggleSorting: (type) => {
    set({ sorting: type });
  }
}))