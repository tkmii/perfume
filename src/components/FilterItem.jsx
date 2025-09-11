import ShowHideBtn from "./ui/ShowHideBtn";
import Spinner from "./ui/spinner";
import { useState } from "react";
import { useFilterStore } from '../store/store'

export default function FilterItem({ title, data, custom, originalData, liDataAttr }) {
  const [isHide, setIsHide] = useState(true)
  const applyNotesFilter = useFilterStore((state) => state.applyNotesFilter)
  const setNotesFilter = useFilterStore((state) => state.setNotesFilter)
  const applyChordsFilter = useFilterStore((state) => state.applyChordsFilter)
  const setChordsFilter = useFilterStore((state) => state.setChordsFilter)
  const ascendingPrice = useFilterStore((state) => state.ascendingPrice)
  const descendingPrice = useFilterStore((state) => state.descendingPrice)

  const className = `filter-sorting ${isHide ? '' : 'show-all'}`;

  const handleClick = () => {
    if (isHide) {
      setIsHide(false)
    } else {
      setIsHide(true)
    }
  }

  const handleItemClick = (e) => {
    const text = e.target.innerHTML

    if (e.target.dataset.type == 'notes') {
      setNotesFilter(text)
      applyNotesFilter(originalData)
    } else if (e.target.dataset.type == 'chords') {
      setChordsFilter(text)
      applyChordsFilter(originalData)
    }

  }

  const handleCustomClick = (e) => {
    if (e.target.dataset.type == 'ascending') {
      ascendingPrice(originalData)
    } else if (e.target.dataset.type == 'descending') {
      descendingPrice(originalData)
    }
  }

  return (
    <>
      <div className={className}>
        <h3 className="filter-title">{title}</h3>
        {data ? (
          <>
            <ul className="filter-list">
              {custom ?
                (<>
                  {data.map((item) => (
                    <li key={item.text} data-type={item.dataAttr} onClick={handleCustomClick}>{item.text}</li>
                  ))}
                </>) :
                (<>
                  {data.map((item) => (
                    <li key={item} data-type={liDataAttr} onClick={handleItemClick}>{item}</li>
                  ))}
                </>)
              }

            </ul>
            {data.length > 2 && <ShowHideBtn condition={isHide} handleClick={handleClick} />}
          </>
        ) : (
          <Spinner />
        )}

      </div>
    </>
  )
}