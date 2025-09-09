import FilterItem from './FilterItem'

export default function Filter({ data }) {

  return (
    <>
      <div className="filter">
        <h2 className="filter-title">Фильтры</h2>
        {/* <FilterItem title="По цене:" data={data} /> */}
        <FilterItem title="По нотам:" data={data} />
        <FilterItem title="По аккордам:" data={data} />
      </div>
    </>
  )
}