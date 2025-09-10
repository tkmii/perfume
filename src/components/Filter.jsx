import FilterItem from './FilterItem'

export default function Filter({ notes, chords, price }) {

  return (
    <>
      <div className="filter">
        <h2 className="filter-title">Фильтры</h2>
        <FilterItem title="По цене:" data={price} />
        <FilterItem title="По нотам:" data={notes} />
        <FilterItem title="По аккордам:" data={chords} />
      </div>
    </>
  )
}