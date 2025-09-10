import { useEffect } from 'react';
import FilterItem from './FilterItem'
import { useFilterDisplayedStore } from '../store/store'

export default function Filter({ data }) {
  const {
    priceItems,
    notesItems,
    chordsItems,
    setData,
    calculateNotesItems,
    calculateChordsItems
  } = useFilterDisplayedStore();

  useEffect(() => {
    setData(data)
    calculateNotesItems();
    calculateChordsItems();
  }, [data, setData, calculateNotesItems, calculateChordsItems])

  return (
    <>
      <div className="filter">
        <h2 className="filter-title">Фильтры</h2>
        <FilterItem title="По цене:" data={priceItems} />
        <FilterItem title="По нотам:" data={notesItems} />
        <FilterItem title="По аккордам:" data={chordsItems} />
      </div>
    </>
  )
}