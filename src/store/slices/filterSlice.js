import { getItemNotes, getItemChords, getSearchData, getNewFilter, getPriceSort, itemIncludesAllFilters } from "/src/utils/filterCalculations";

export const createFilterSlice = (set, get) => ({
  notesFilter: [],
  chordsFilter: [],
  search: '',
  priceSort: null,

  notesItems: [],
  chordsItems: [],
  priceItems: [
    { text: 'По возрастанию', type: 'ascending' },
    { text: 'По убыванию', type: 'descending' }
  ],

  setSearch: (searchTerm) => {
    set({ search: searchTerm });
    get().applySearch();
  },

  applySearch: () => {
    const { originalData, search } = get();
    let filtered = getSearchData(originalData, search);
    set({ filteredData: filtered });
  },

  toggleNoteFilter: (note) => {
    set(state => {
      const { notesFilter } = state;
      const newNotesFilter = getNewFilter(notesFilter, note);

      return {
        notesFilter: newNotesFilter,
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
      };
    });
    get().applyFilters();
  },

  setPriceSort: (sortType) => {
    set({
      priceSort: sortType,
    });
    get().applyFilters();
  },

  applyFilters: () => {
    const { originalData, notesFilter, chordsFilter, priceSort } = get();

    let filtered = [...originalData];

    if (notesFilter.length > 0) {
      filtered = filtered.filter(item =>
        itemIncludesAllFilters(item, notesFilter, getItemNotes)
      );
    }

    if (chordsFilter.length > 0) {
      filtered = filtered.filter(item =>
        itemIncludesAllFilters(item, chordsFilter, getItemChords)
      );
    }

    if (priceSort) {
      filtered = getPriceSort(priceSort, filtered)
    }

    set({ filteredData: filtered });
  },

  shouldShowReset: () => {
    const { notesFilter, chordsFilter, priceSort } = get();

    return notesFilter.length > 0 ||
      chordsFilter.length > 0 ||
      priceSort !== null
  },

  resetFilters: () => {

    set({
      search: '',
      notesFilter: [],
      chordsFilter: [],
      priceSort: null,
      filteredData: get().originalData,
    });
  }
});