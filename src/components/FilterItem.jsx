import ShowHideBtn from "./ui/ShowHideBtn";
import Spinner from "./ui/spinner";
import { useState } from "react";
import { useCatalogStore } from '../store/store'

export default function FilterItem({ type }) {
  const [isHide, setIsHide] = useState(true);
  const className = `filter-sorting ${isHide ? '' : 'show-all'}`;
  const { priceItems, notesItems, notesFilter, chordsItems, chordsFilter, toggleNoteFilter, toggleChordFilter, setPriceSort, priceSort } = useCatalogStore();

  const getFilterConfig = () => {
    switch (type) {
      case 'notes':
        return {
          title: 'По нотам:',
          data: notesItems,
          handler: toggleNoteFilter,
          filter: notesFilter
        };
      case 'chords':
        return {
          title: 'По аккордам:',
          data: chordsItems,
          handler: toggleChordFilter,
          filter: chordsFilter
        };
      case 'price':
        return {
          title: 'По цене:',
          data: priceItems,
          handler: (item) => {
            console.log(item.type)
            setPriceSort(item.type);
          },
          filter: priceSort,
          isCustom: true,
        };
      default:
        return { title: '', data: [], handler: () => { } };
    }
  };

  const { title, data, handler, filter, isCustom } = getFilterConfig();

  return (
    <div className={className}>
      <h3 className="filter-title">{title}</h3>
      {data ? (
        <>
          <ul className="filter-list">
            {data.map((item) => (
              <li
                className={`filter-item ${filter && filter.includes(item.type || item) ? 'filter-item__active' : ''}`}
                key={isCustom ? item.text : item}
                onClick={() => handler(item)}
              >
                {isCustom ? item.text : item}
              </li>
            ))}
          </ul>
          {data.length > 2 && (
            <ShowHideBtn condition={isHide} handleClick={() => setIsHide(!isHide)} />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}