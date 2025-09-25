import { useSortingStore } from '../store/store'
import { SortingBtnTypes } from '../types'

function SortingBtn({ Svg, type }: SortingBtnTypes) {
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