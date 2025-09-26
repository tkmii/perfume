import { useSorting } from "../context/SortingContext";
import { SortingBtnTypes } from '../types'

function SortingBtn({ Svg, type }: SortingBtnTypes) {
  const { toggleSorting } = useSorting()

  return (
    <>
      <button
        className="sorting-btn"
        data-type={type}
        onClick={(e) => toggleSorting(type)}
      >
        <Svg />
      </button>
    </>
  );
}

export default SortingBtn;