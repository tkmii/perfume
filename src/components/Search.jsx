import { useFilterStore } from '../store/store'

export default function Search({ data }) {
  const search = useFilterStore((state) => { state.search })
  const setSearch = useFilterStore((state) => state.setSearch)
  const applySearch = useFilterStore((state) => state.applySearch)

  const handleChange = (value) => {
    setSearch(value)
    applySearch(data)
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