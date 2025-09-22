import Item from "./item";
import Error from "./ui/Error";
import { useCatalogStore, useSortingStore } from '../store/store.js';

export default function Catalog() {
  const filteredData = useCatalogStore(state => state.filteredData);
  const sorting = useSortingStore(state => state.sorting)

  if (!filteredData || filteredData.length === 0) {
    return <Error text="Результатов нет" />;
  }

  return (
    <div className={`catalog ${sorting === 'grid' ? 'grid' : 'string'}`} id="catalog">
      <Item />
    </div>
  );
}