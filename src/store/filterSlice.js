import { getAllNotes, getAllChords, getSearchData, getNewFilter, getPriceSort, filterByInclusion } from "../utils/filterCalculations";

export const createFilterSlice = (set, get) => ({
  notesFilter: [],
  chordsFilter: [],
  search: '',
  priceSort: null,
  reset: false,

  notesItems: [],
  chordsItems: [],
  priceItems: [
    { text: 'По возрастанию', type: 'ascending' },
    { text: 'По убыванию', type: 'descending' }
  ],

  setSearch: (searchTerm) => {
    set({ search: searchTerm });
  },

  applySearch: () => {
    const { originalData, search } = get();
    let filtered = getSearchData([...originalData], search)
    set({ filteredData: filtered });
  },

  toggleNoteFilter: (note) => {
    set(state => {
      const { notesFilter } = state;
      const newNotesFilter = getNewFilter(notesFilter, note);

      return {
        notesFilter: newNotesFilter,
        reset: true
      };
    },
    );
    get().applyFilters();
  },

  toggleChordFilter: (chord) => {
    set(state => {
      const { chordsFilter } = state;
      const newChordsFilter = getNewFilter(chordsFilter, chord);

      return {
        chordsFilter: newChordsFilter,
        reset: true
      };
    });
    get().applyFilters();
  },

  setPriceSort: (sortType) => {
    set({
      priceSort: sortType,
      reset: true
    });
    get().applyFilters();
  },

  applyFilters: () => {
    const { originalData, notesFilter, chordsFilter, priceSort } = get();

    let filtered = [...originalData];

    if (notesFilter.length > 0) {
      filtered = filtered.filter(item =>
        filterByInclusion(item, notesFilter, getAllNotes)
      );
    }

    if (chordsFilter.length > 0) {
      filtered = filtered.filter(item =>
        filterByInclusion(item, chordsFilter, getAllChords)
      );
    }

    getPriceSort(priceSort, filtered)

    set({ filteredData: filtered });
  },

  resetFilters: () => {
    set({
      search: '',
      notesFilter: [],
      chordsFilter: [],
      priceSort: null,
      filteredData: get().originalData,
      reset: false
    });
  }
});