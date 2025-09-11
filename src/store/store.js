import { create } from "zustand";

// Для отображения фильтров
export const useFilterDisplayedStore = create((set) => ({
  originalData: [],
  notesItems: [],
  chordsItems: [],
  priceItems: [
    {
      text: 'По возрастанию',
      dataAttr: 'ascending'
    },
    {
      text: 'По убыванию',
      dataAttr: 'descending'
    }
  ],

  setData: (data) => set({ originalData: data }),

  calculateNotesItems: () => set((state) => {
    const notesOriginal = state.originalData.map((item) => {
      if (item.notes.length) {
        return item.notes
      } else {
        const combinedArray = item.notes.top.concat(item.notes.middle, item.notes.basic)
        return combinedArray
      }
    });
    let notes = [...new Set(notesOriginal.flat())];
    return { notesItems: notes }
  }),

  calculateChordsItems: () => set((state) => {
    const chordsOriginal = state.originalData.map((item) => item.chords)
    let chords = [...new Set(chordsOriginal.flat())];
    return { chordsItems: chords }
  }),

}))

// Для самих фильтров и поиска
export const useFilterStore = create((set, get) => ({
  filteredData: [],
  notesFilter: [],
  chordsFilter: [],
  search: '',

  setOriginalData: (originalData) => {
    set({ filteredData: originalData });
  },

  setSearch: (searchTerm) => {
    set({ search: searchTerm });
  },

  applySearch: (originalData) => {
    const searchTerm = get().search

    if (searchTerm) {
      const filtred = originalData.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      });
      set({ filteredData: filtred });
    } else {
      set({ filteredData: originalData });
    }

  },

  setNotesFilter: (filter) => {
    set((state) => ({
      notesFilter: [...state.notesFilter, filter]
    }));
  },

  applyNotesFilter: (originalData) => {
    const notes = get().notesFilter

    if (notes) {
      const filteredCards = originalData.filter(item => {
        const allNotes = [
          ...(item.notes.top || []),
          ...(item.notes.middle || []),
          ...(item.notes.basic || [])
        ];

        return notes.every(filter => allNotes.includes(filter));
      });
      set({ filteredData: filteredCards });
    }
  },

  setChordsFilter: (filter) => {
    set((state) => ({
      chordsFilter: [...state.chordsFilter, filter]
    }));
  },

  applyChordsFilter: (originalData) => {
    const chords = get().chordsFilter

    if (chords) {
      const filteredCards = originalData.filter(item => {
        return chords.every(filter => item.chords.includes(filter))
      });
      set({ filteredData: filteredCards });
    }
  },

  ascendingPrice: (originalData) => {
    const sortedData = [...originalData].sort((a, b) => a.price - b.price);
    set({ filteredData: sortedData });
  },

  descendingPrice: (originalData) => {
    const sortedData = [...originalData].sort((a, b) => b.price - a.price);
    set({ filteredData: sortedData });
  }
}))