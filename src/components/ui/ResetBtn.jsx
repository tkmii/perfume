import { useCatalogStore } from '/src/store/store.js'

export default function ResetBtn() {
  const resetFilters = useCatalogStore(state => state.resetFilters)

  return (
    <>
      <button className="filter-reset" onClick={resetFilters}>Сбросить</button>
    </>

  )
}