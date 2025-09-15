import { useCatalogStore } from '../store/store'

export default function Search() {
  const { search, setSearch, applySearch } = useCatalogStore()

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