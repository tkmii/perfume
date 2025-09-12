import { create } from "zustand";
import axios from "axios";

export const useCatalogStore = create((set, get) => ({
  originalData: [],
  filteredData: [],
  isLoading: false,
  isError: false,
  errorText: '',

  notesFilter: [],
  chordsFilter: [],
  search: '',
  priceSort: null,

  notesItems: [],
  chordsItems: [],
  priceItems: [
    { text: 'По возрастанию', dataAttr: 'ascending' },
    { text: 'По убыванию', dataAttr: 'descending' }
  ],

  fetchData: async () => {
    set({ isLoading: true, isError: false, errorText: '' });

    try {
      const response = await axios.get('https://raw.githubusercontent.com/tkmii/perfume/refs/heads/main/perfume.json');
      const data = response.data;

      const allNotes = data.flatMap(item => {
        if (item.notes && Array.isArray(item.notes)) {
          return item.notes;
        } else if (item.notes) {
          return [...(item.notes.top || []), ...(item.notes.middle || []), ...(item.notes.basic || [])];
        }
        return [];
      });

      const allChords = data.flatMap(item => item.chords || []);

      set({
        originalData: data,
        filteredData: data,
        notesItems: [...new Set(allNotes)],
        chordsItems: [...new Set(allChords)],
        isLoading: false
      });
    } catch (error) {
      set({
        errorText: error.message,
        isError: true,
        isLoading: false
      });
    }
  },

  setSearch: (searchTerm) => {
    set({ search: searchTerm });
    get().applyFilters();
  },

  toggleNoteFilter: (note) => {
    set(state => {
      const newNotesFilter = state.notesFilter.includes(note)
        ? state.notesFilter.filter(n => n !== note)
        : [...state.notesFilter, note];

      return { notesFilter: newNotesFilter };
    });
    get().applyFilters();
  },

  toggleChordFilter: (chord) => {
    set(state => {
      const newChordsFilter = state.chordsFilter.includes(chord)
        ? state.chordsFilter.filter(c => c !== chord)
        : [...state.chordsFilter, chord];

      return { chordsFilter: newChordsFilter };
    });
    get().applyFilters();
  },

  setPriceSort: (sortType) => {
    set({ priceSort: sortType });
    get().applyFilters();
  },

  applyFilters: () => {
    const { originalData, search, notesFilter, chordsFilter, priceSort } = get();

    let filtered = [...originalData];

    if (search) {
      const searchTerm = search.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
      );
    }

    if (notesFilter.length > 0) {
      filtered = filtered.filter(item => {
        const allNotes = [
          ...(item.notes?.top || []),
          ...(item.notes?.middle || []),
          ...(item.notes?.basic || []),
          ...(Array.isArray(item.notes) ? item.notes : [])
        ];
        return notesFilter.every(filter => allNotes.includes(filter));
      });
    }

    if (chordsFilter.length > 0) {
      filtered = filtered.filter(item =>
        chordsFilter.every(filter => item.chords?.includes(filter))
      );
    }

    if (priceSort === 'ascending') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'descending') {
      filtered.sort((a, b) => b.price - a.price);
    }

    set({ filteredData: filtered });
  },

  resetFilters: () => {
    set({
      search: '',
      notesFilter: [],
      chordsFilter: [],
      priceSort: null,
      filteredData: get().originalData
    });
  }
}))