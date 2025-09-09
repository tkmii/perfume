
import Item from "../components/item";
import Error from "./ui/Error";

export default function Catalog({ data }) {

  if (data.length === 0) return <Error text="Результатов нет" />
  else
    return (
      <>
        <div className="catalog" id="catalog">
          <Item data={data} />
        </div>

      </>
    );
}