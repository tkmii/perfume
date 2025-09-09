export default function FilterItem({ title, data }) {

  return (
    <>
      <div className="filter-sorting">
          <h3 className="filter-title">{title}</h3>
          <ul className="filter-list">
            {data.map((item) => (
              <li key={new Date()}>{item}</li>
            ))}
          </ul>
      </div>
    </>
  )
}