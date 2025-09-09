import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Catalog from '../components/catalog'
import Search from '../components/Search'
// import Filter from '../components/Filter'
import Sorting from '../components/Sorting'
import Title from '../components/Title'
import Error from "../components/ui/Error";
import Spinner from "../components/ui/spinner";

export function PageCatalog() {
  const [isLoading, isError, data, errorText] = useFetch('https://raw.githubusercontent.com/tkmii/perfume/refs/heads/main/perfume.json', 'all')
  const [filtredData, setFiltredData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [notesSort, setNotesSort] = useState([])
  const [chordsSort, setChordsSort] = useState([])

  useEffect(() => {
    if (data) {
      setFiltredData(data)
    }

    if (searchTerm) {
      const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltredData(filteredData)
    }

  }, [data, searchTerm])
  //     setDisplayedData(data)
  //   }

  //   if (searchTerm) {
  //     const filteredData = data.filter(item =>
  //       item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setDisplayedData(filteredData)
  //   }

  // }, [searchTerm, data]);

  useEffect(() => {
    const chordsOriginal = data.map((item) => item.chords)
    const notesOriginal = data.map((item) => {
      if (item.notes.length) {
        return item.notes
      } else {
        const combinedArray = item.notes.top.concat(item.notes.middle, item.notes.basic)
        return combinedArray
      }
    });

    let notes = [...new Set(notesOriginal.flat())];
    let chords = [...new Set(chordsOriginal.flat())];
  
    setChordsSort(chords.sort())
    setNotesSort(notes.sort())
  }, [data])

return (
  <div>
    <Title />
    <div className="flex-wrapper">
      <Search value={searchTerm} setValue={setSearchTerm} />
      <Sorting />
    </div>
    <div className="page" id="page">
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
            {chordsSort.map((item) => (
              <li key={new Date()}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="filter-sorting">
          <h3 className="filter-title">По аккордам:</h3>
          <ul className="filter-list">
            {notesSort.map((item) => (
              <li key={new Date()} >{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error text={errorText} />
      ) : (
        <Catalog data={filtredData} />
      )}

    </div>
  </div>
)
}