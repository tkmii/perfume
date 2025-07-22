
import Item from "../components/item";

export default function Catalog({ data }) {

  return (
    <>
      <div className="catalog" id="catalog">
        <Item data={data} />
      </div>

    </>
  );
}