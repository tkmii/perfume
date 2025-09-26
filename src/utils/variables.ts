import { type FilterConfig, ScreenWidthConfig } from '../types'

export const FILTER_CONFIG: FilterConfig = {
  notes: {
    title: 'По нотам:',
    selector: state => state.notesItems,
    filterSelector: state => state.notesFilter,
    handler: 'toggleNoteFilter'
  },
  chords: {
    title: 'По аккордам:',
    selector: state => state.chordsItems,
    filterSelector: state => state.chordsFilter,
    handler: 'toggleChordFilter'
  },
  price: {
    title: 'По цене:',
    selector: state => state.priceItems,
    filterSelector: state => state.priceSort,
    handler: 'setPriceSort',
    isCustom: true
  }
};

export const BREAKPOINTS: ScreenWidthConfig = {
  tablet: 767,
  notebook: 1200,
}