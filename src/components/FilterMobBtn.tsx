import ResetBtn from './ui/ResetBtn'
import { useFiltresMob } from '../context/FiltresMobContext'
import { useCatalogStore } from '../store/store'
import { useShallow } from 'zustand/shallow'

export function FilterMobBtn() {
  const { setIsActiveFilters } = useFiltresMob()
  const shouldShowReset = useCatalogStore(
    useShallow(state => state.shouldShowReset())
  );

  const scrollAndSetFilters = () => {
    setIsActiveFilters(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <>
    {shouldShowReset && (
      <div className="filtermob__btns">
        <ResetBtn />
        <button onClick={() => scrollAndSetFilters()}>Применить</button>
      </div>
    )}
    </>
  );
}

export default FilterMobBtn;