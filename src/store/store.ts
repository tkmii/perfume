import { create } from "zustand";
import { createCatalogSlice } from "./slices/catalogSlice";
import { createFilterSlice } from './slices/filterSlice'
import { type StoreState } from '../types'

export const useCatalogStore = create<StoreState>()((...a) => ({
  ...createFilterSlice(...a),
  ...createCatalogSlice(...a),
}));

// TODO: переделать под context api 
export const useSortingStore = create((set) => ({
  sorting: 'grid',

  toggleSorting: (type: any) => {
    set({ sorting: type });
  }
}))