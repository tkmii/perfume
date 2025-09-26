import Item from "./item";
import Error from "./ui/Error";
import { useCatalogStore } from '../store/store.js';
import { useSorting } from "../context/SortingContext";

export default function Catalog() {
  const filteredData = useCatalogStore(state => state.filteredData);
  const { sorting } = useSorting();

  if (!filteredData || filteredData.length === 0) {
    return <Error text="Результатов нет" />;
  }

  return (
      <>
      <div className={`catalog ${sorting}`} id="catalog">
        <Item />
      </div>
      </>
      
    
  );
}