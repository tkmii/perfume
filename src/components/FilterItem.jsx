import ShowHideBtn from "./ui/ShowHideBtn";
import Spinner from "./ui/spinner";
import { useState } from "react";
import { useCatalogStore } from '../store/store'

export default function FilterItem({ type }) {
  const [isHide, setIsHide] = useState(true);
  const {
    notesItems,
    chordsItems,
    priceItems,
    toggleNoteFilter,
    toggleChordFilter,
    setPriceSort
  } = useCatalogStore();

  const className = `filter-sorting ${isHide ? '' : 'show-all'}`;

  const handleClick = () => setIsHide(!isHide);

  const getFilterConfig = () => {
    switch (type) {
      case 'notes':
        return {
          title: 'По нотам:',
          data: notesItems,
          handler: toggleNoteFilter
        };
      case 'chords':
        return {
          title: 'По аккордам:',
          data: chordsItems,
          handler: toggleChordFilter
        };
      case 'price':
        return {
          title: 'По цене:',
          data: priceItems,
          handler: (item) => setPriceSort(item.dataAttr),
          isCustom: true
        };
      default:
        return { title: '', data: [], handler: () => { } };
    }
  };


  const { title, data, handler, isCustom } = getFilterConfig();

  return (
    <div className={className}>
      <h3 className="filter-title">{title}</h3>
      {data ? (
        <>
          <ul className="filter-list">
            {data.map((item) => (
              <li
                key={isCustom ? item.text : item}
                onClick={() => handler(item)}
              >
                {isCustom ? item.text : item}
              </li>
            ))}
          </ul>
          {data.length > 2 && (
            <ShowHideBtn condition={isHide} handleClick={handleClick} />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}