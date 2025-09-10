import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Catalog from '../components/catalog'
import Search from '../components/Search'
import Filter from '../components/Filter'
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
  const priceSort = ['По возрастанию цены', 'По убыванию цены']

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
        <Filter notes={notesSort} chords={chordsSort} price={priceSort} />
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