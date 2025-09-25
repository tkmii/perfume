import { useCatalogStore } from '../../store/store'

export default function ResetBtn() {
  const resetFilters = useCatalogStore(state => state.resetFilters)

  return (
    <>
      <button className="filter-reset" onClick={resetFilters}>Сбросить</button>
    </>

  )
}