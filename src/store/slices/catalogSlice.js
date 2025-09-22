import axios from "axios";
import { getAllNotes, getAllChords } from "../../utils/filterCalculations";

export const createCatalogSlice = (set, get) => ({
  originalData: [],
  // в проекте поиск и фильтры существуют отдельно - так и должно быть, пока что не переделываем. поэтому дублируем состояние filteredData
  filteredData: [],
  isLoading: false,
  isError: false,
  errorText: '',

  fetchData: async () => {
    if (get().originalData.length > 0) return;
    set({ isLoading: true, isError: false, errorText: '' });

    try {
      const response = await axios.get('https://raw.githubusercontent.com/tkmii/perfume/refs/heads/main/perfume.json');
      const data = response.data;

      const allNotes = getAllNotes(data).sort();
      const allChords = getAllChords(data).sort();

      set({
        originalData: data,
        filteredData: data,
        isLoading: false,
        isError: false,
        notesItems: [...new Set(allNotes)],
        chordsItems: [...new Set(allChords)],
      });
    } catch (error) {
      set({
        errorText: error.message,
        isError: true,
        isLoading: false,
      });
    }
  },
});