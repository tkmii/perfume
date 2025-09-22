import { useSortingStore } from '../store/store'

function SortingBtn({ Svg, type }) {
  const toggleSorting = useSortingStore((state) => state.toggleSorting)

  return (
    <>
      <button
        className="sorting-btn"
        data-type={type}
        onClick={(e) => toggleSorting(e.currentTarget.dataset.type)}
      >
        <Svg />
      </button>
    </>
  );
}

export default SortingBtn;