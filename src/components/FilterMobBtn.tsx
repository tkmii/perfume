import ResetBtn from './ui/ResetBtn'
import { useFiltresMob } from '../context/FiltresMobContext'
import { useCatalogStore } from '../store/store'
import { useShallow } from 'zustand/shallow'

export function FilterMobBtn() {
  const { setIsActiveFilters } = useFiltresMob()
  const shouldShowReset = useCatalogStore(
    useShallow(state => state.shouldShowReset())
  );
  
  return (
    <>
    {shouldShowReset && (
      <div className="filtermob__btns">
        <ResetBtn />
        <button onClick={() => setIsActiveFilters(false)}>Применить</button>
      </div>
    )}
    </>
  );
}

export default FilterMobBtn;