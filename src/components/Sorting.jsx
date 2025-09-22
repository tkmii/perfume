import SortingBtn from "./SortingBtn"
import Grid from "./svg/Grid"
import String from './svg/String'

export default function Sorting() {

  return (
    <>
      <div className="sorting">
        <SortingBtn Svg={Grid} type='grid' />
        <SortingBtn Svg={String} type='string' />
      </div>
    </>
  )
}