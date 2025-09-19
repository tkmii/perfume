import ShowHideBtn from "./ui/ShowHideBtn";
import Spinner from "./ui/spinner";
import { useState, useMemo } from "react";
import { useCatalogStore } from '../store/store'
import { FILTER_CONFIG } from "../utils/variables";

export default function FilterItem({ type }) {
  const [isHide, setIsHide] = useState(true);

  const config = FILTER_CONFIG[type];

  const items = useCatalogStore(config.selector);
  const filter = useCatalogStore(config.filterSelector);
  const handlerFunction = useCatalogStore(state => state[config.handler]);

  const { title, isCustom } = useMemo(() => ({
    title: config?.title || '',
    isCustom: config?.isCustom || false
  }), [config]);

  if (!config) {
    console.warn(`Unknown filter type: ${type}`);
    return null;
  }

  const handleItemClick = (item) => {
    if (isCustom) {
      handlerFunction(item.type);
    } else {
      handlerFunction(item);
    }
  };

  const isItemActive = (item) => {
    if (isCustom) {
      return filter === item.type;
    }
    return filter.includes(item);
  };

  const shouldShowToggle = items && items.length > 2;

  return (
    <div className={`filter-sorting ${isHide ? '' : 'show-all'}`}>
      <h3 className="filter-title">{title}</h3>
      {items ? (
        <>
          <ul className="filter-list">
            {items.map((item) => (
              <li
                className={`filter-item ${isItemActive(item) ? 'filter-item__active' : ''
                  }`}
                key={isCustom ? item.text : item}
                onClick={() => handleItemClick(item)}
                
              >
                {isCustom ? item.text : item}
              </li>
            ))}
          </ul>
          {shouldShowToggle && (
            <ShowHideBtn
              condition={isHide}
              handleClick={() => setIsHide(!isHide)}
            />
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}