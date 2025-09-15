import Item from "./item";
import Error from "./ui/Error";
import { useCatalogStore } from '../store/store';

export default function Catalog() {
  const filteredData = useCatalogStore((state) => state.filteredData);

  if (!filteredData || filteredData.length === 0) {
    return <Error text="Результатов нет" />;
  }

  return (
    <div className="catalog" id="catalog">
      <Item />
    </div>
  );
}