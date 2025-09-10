import { create } from "zustand";

// Для отображения фильтров
export const useFilterDisplayedStore = create((set) => ({
  originalData: [],
  notesItems: [],
  chordsItems: [],
  priceItems: ['По возрастанию', 'По убыванию'],
  
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
export const useFilterStore = create((set) => ({
  
}))