import { useCatalogStore } from '/src/store/store.js'

export default function ResetBtn() {
  const reset = useCatalogStore(state => state.reset)
  const resetFilters = useCatalogStore(state => state.resetFilters)

  return (
    <>
      {reset && (<button className="filter-reset" onClick={resetFilters}>Сбросить</button>)}
    </>

  )
}