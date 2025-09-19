import { create } from "zustand";
import { createCatalogSlice } from "./slices/catalogSlice";
import { createFilterSlice } from "./slices/filterSlice";

export const useCatalogStore = create((...args) => ({
  ...createCatalogSlice(...args),
  ...createFilterSlice(...args),
}));