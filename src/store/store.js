import { create } from "zustand";
import { createCatalogSlice } from "./catalogSlice";
import { createFilterSlice } from "./filterSlice";

export const useCatalogStore = create((...args) => ({
  ...createCatalogSlice(...args),
  ...createFilterSlice(...args),
}));