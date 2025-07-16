export default function Filter() {

  return (
    <>
      <div className="filter">
        <h2 className="filter-title">Фильтры</h2>
        <div className="filter-sorting">
          <h3 className="filter-title">По цене:</h3>
          <ul className="filter-list">
            <li>
              <span>по убыванию</span>
              <svg
                className="down"
                enableBackground="new 0 0 20 20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
              >
                <path
                  d="m15 5-5-5-5 5 1.4 1.4 2.6-2.6v16.2h2v-16.2l2.6 2.6z"
                  fill="rgb(0,0,0)"
                />
              </svg>
            </li>
            <li>
              <span>по возрастанию</span>
              <svg
                enableBackground="new 0 0 20 20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
              >
                <path
                  d="m15 5-5-5-5 5 1.4 1.4 2.6-2.6v16.2h2v-16.2l2.6 2.6z"
                  fill="rgb(0,0,0)"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="filter-sorting">
          <h3 className="filter-title">По нотам:</h3>
          <ul className="filter-list">
            <li>апельсин</li>
            <li>мандарин</li>
          </ul>
        </div>
        <div className="filter-sorting">
          <h3 className="filter-title">По аккордам:</h3>
          <ul className="filter-list">
            <li>апельсин</li>
            <li>мандарин</li>
          </ul>
        </div>
      </div>
    </>
  )
}