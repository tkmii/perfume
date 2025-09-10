import ShowHideBtn from "./ui/ShowHideBtn";
import Spinner from "./ui/spinner";
import { useState } from "react";

export default function FilterItem({ title, data }) {
  const [isHide, setIsHide] = useState(true)

  const className = `filter-sorting ${isHide ? '' : 'show-all'}`;

  const handleClick = () => {
    if (isHide) {
      setIsHide(false)
    } else {
      setIsHide(true)
    }
  }

  return (
    <>
      <div className={className}>
        <h3 className="filter-title">{title}</h3>
        {data ? (
          <>
            <ul className="filter-list">
              {data.map((item) => (
                <li key={item}>{item}</li>
              ))}
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