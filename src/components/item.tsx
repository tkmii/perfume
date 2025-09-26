import Spinner from "./ui/spinner";
import CartBtn from "./ui/CartBtn";
import { Link } from 'react-router-dom';
import { useCatalogStore } from '../store/store'

export default function Item() {
  const filteredData = useCatalogStore(state => state.filteredData)

  return (
    <>
      {filteredData ? (
        filteredData.map(element => (
          <Link to={`/catalog/${element.id}`} className="catalog-item__link" key={element.id}>
            <div className="catalog-item">
              <CartBtn />
              <div className="catalog-item__img-wrapper">
                <img
                  className="catalog-item__img"
                  src={element.photo}
                  alt=""
                />
              </div>
              <div className="catalog-item__product-wrapper">
                <h2 className="catalog-item__title">{element.title}</h2>
                {element.chords && (
                  <div className="catalog-item__descr">
                    <b>Аккорды:</b> {element.chords.join(', ')}
                  </div>
                )}
                <div className="catalog-item__price">
                  <b>Цена:</b> {element.price.toLocaleString('ru-RU')} руб
                </div>
              </div>
              
            </div>
          </Link>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
}