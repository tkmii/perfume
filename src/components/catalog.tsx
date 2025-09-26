import Item from "./item";
import Error from "./ui/Error";
import { useCatalogStore } from '../store/store.js';
import { useSorting } from "../context/SortingContext";
import { useFiltresMob } from "../context/FiltresMobContext";

export default function Catalog() {
  const filteredData = useCatalogStore(state => state.filteredData);
  const { sorting } = useSorting();
  const { isActiveFilters } = useFiltresMob()

  if (!filteredData || filteredData.length === 0) {
    return <Error text="Результатов нет" />;
  }

  return (
      <>
        {isActiveFilters === false ? (
          <div className={`catalog ${sorting}`} id="catalog">
            <Item />
          </div>
        ) : ''}
      </>
      
    
  );
}