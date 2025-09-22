import { useCatalogStore } from '../store/store'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
  const search = useCatalogStore(state => state.search);
  const setSearch = useCatalogStore(state => state.setSearch);

  const debouncedSetSearch = useDebouncedCallback((value) => {
    setSearch(value);
  }, 100);

  return (
    <div className="search">
      <input
        value={search}
        onChange={(e) => debouncedSetSearch(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}