import FilterItem from './FilterItem'

export default function Filter() {
  return (
    <div className="filter">
      <h2 className="filter-title">Фильтры</h2>
      <FilterItem type="price" />
      <FilterItem type="notes" />
      <FilterItem type="chords" />
    </div>
  )
}