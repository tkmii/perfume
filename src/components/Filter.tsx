import FilterItem from './FilterItem'
import ResetBtn from './ui/ResetBtn'
import { useCatalogStore } from '../store/store'
import { useShallow } from 'zustand/shallow'

export default function Filter() {
  const shouldShowReset = useCatalogStore(
    useShallow(state => state.shouldShowReset())
  );

  return (
    <div className="filter">
      <h2 className="filter-title">Фильтры</h2>
      <FilterItem type="price" />
      <FilterItem type="notes" />
      <FilterItem type="chords" />
      {shouldShowReset && <ResetBtn />}
    </div>
  )
}