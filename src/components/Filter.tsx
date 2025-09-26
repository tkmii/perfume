import FilterItem from './FilterItem'
import ResetBtn from './ui/ResetBtn'
import FilterMobBtn from './FilterMobBtn'
import { useCatalogStore } from '../store/store'
import { useShallow } from 'zustand/shallow'
import { useScreenWidth } from '../hooks/useScreenWidth'
import { useFiltresMob } from '../context/FiltresMobContext'

export default function Filter() {
  const shouldShowReset = useCatalogStore(
    useShallow(state => state.shouldShowReset())
  );
  const device = useScreenWidth()
  const { isActiveFilters, setIsActiveFilters } = useFiltresMob()

  return (
    <div className="filter__wrapper">
    {device == 'isMobile' && <button className="filtermob" onClick={() => setIsActiveFilters(true)}>Фильтры</button>}
    <div className={`filter ${isActiveFilters ? 'active' : ''}`}>
      {device == 'isMobile' && <button className="filtermob__close" onClick={() => setIsActiveFilters(false)}>Закрыть</button>}
      <h2 className="filter-title">Фильтры</h2>
      <FilterItem type="price" />
      <FilterItem type="notes" />
      <FilterItem type="chords" />
      {(shouldShowReset && device !== 'isMobile') && <ResetBtn />}
    </div>
    {isActiveFilters == true && <FilterMobBtn />}
    </div>
    
  )
}