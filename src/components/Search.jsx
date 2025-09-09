export default function Search({ value, setValue }) {
  return (
    <div className="search">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Поиск"
      />
    </div>
  )
}