export default function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}