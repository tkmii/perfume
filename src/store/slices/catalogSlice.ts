import axios from "axios";
import { type CatalogSlice } from '../../types'
import { StateCreator } from 'zustand';

export const createCatalogSlice: StateCreator<CatalogSlice, [], [], CatalogSlice> = (set, get) => ({
  originalData: [],
  // в проекте поиск и фильтры существуют отдельно - так и должно быть, пока что не переделываем. поэтому дублируем состояние filteredData
  filteredData: [],
  isLoading: false,
  isError: false,
  errorText: '',
  notesItems: [], 
  chordsItems: [],

  fetchData: async () => {
    if (get().originalData.length > 0) return;
    set({ isLoading: true, isError: false, errorText: '' });

    try {
      const response = await axios.get('https://raw.githubusercontent.com/tkmii/perfume/refs/heads/main/perfume.json');
      const data = response.data;

      set({
        originalData: data,
        filteredData: data,
        isLoading: false,
        isError: false,
      });

    } catch (error: any) {
      set({
        errorText: error.message,
        isError: true,
        isLoading: false,
      });
    }
  },
});