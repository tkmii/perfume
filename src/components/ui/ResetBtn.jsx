import { useCatalogStore } from '/src/store/store.js'

export default function ResetBtn() {
  const { reset, resetFilters } = useCatalogStore()

  return (
    <>
      {reset && (<button className="filter-reset" onClick={resetFilters}>Сбросить</button>)}
    </>
    
  )
}