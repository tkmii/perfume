import PropTypes from 'prop-types';
import Spinner from "./ui/spinner";

export default function Item({ data }) {

  const listItems = data && data.map(element =>
    <div className="catalog-item" key={element.id}>
      <button className="catalog-item__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="25"
          height="25"
        >
          <path d="M57.813,47.611H27.66a12.093,12.093,0,0,1-3.219,6.183,3.518,3.518,0,1,0,5.55-4.183H46.023a3.527,3.527,0,1,0,4.909,0h6.881a1,1,0,0,0,0-2Z" />
          <path d="M4.5,10.336H13l5.7,23.272a12.121,12.121,0,0,1,5.937,3.518.975.975,0,0,1,.934-1.328H49.23a1,1,0,0,1,0,2H25.566a.983.983,0,0,1-.423-.1,12.081,12.081,0,0,1,2.284,4.425H52.9a1,1,0,0,0,1-1,.985.985,0,0,0-.73-.945L60.5,14.5H16.077L14.755,9.1a1,1,0,0,0-.971-.763H4.5a1,1,0,0,0,0,2ZM50.2,33.473H24.73a1,1,0,0,1,0-2H50.2a1,1,0,0,1,0,2Zm.972-4.324H23.894a1,1,0,0,1,0-2H51.175a1,1,0,0,1,0,2Zm.973-4.326H23.058a1,1,0,0,1,0-2h29.09a1,1,0,0,1,0,2ZM22.222,18.5h30.9a1,1,0,0,1,0,2h-30.9a1,1,0,0,1,0-2Z" />
          <path d="M15.755,35.233A10.123,10.123,0,1,0,25.878,45.355,10.134,10.134,0,0,0,15.755,35.233ZM21.8,46.355H16.6v5.2a1,1,0,0,1-2,0v-5.2H9.4a1,1,0,0,1,0-2h5.2v-5.2a1,1,0,0,1,2,0v5.2h5.2a1,1,0,1,1,0,2Z" />
        </svg>
      </button>
      <div className="catalog-item__img-wrapper">
        <img
          className="catalog-item__img"
          src={element.photo}
          alt=""
        />
      </div>
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
  )

  return (
    <>
      {data ? (
        listItems

      ) : (
        <Spinner />
      )}


    </>
  );
}

Item.propTypes = {
  data: PropTypes.array
};
