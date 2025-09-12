import { useCatalogStore } from '../store/store'

export default function Search() {
  const { data, search, setSearch, applyFilters } = useCatalogStore()

  const handleChange = (value) => {
    setSearch(value)
    applyFilters(data)
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