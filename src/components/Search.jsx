import { useCatalogStore } from '../store/store'

export default function Search() {
  const search = useCatalogStore(state => state.search);
  const setSearch = useCatalogStore(state => state.setSearch);
  const applySearch = useCatalogStore(state => state.applySearch);

  const handleChange = (value) => {
    setSearch(value)
    applySearch()
  }

  return (
    <div className="search">
      <input
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}