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


  return (
    <div>
      <Title />
      <div className="flex-wrapper">
        <Search value={searchTerm} setValue={setSearchTerm} />
        <Sorting />
      </div>
      <div className="page" id="page">
        <Filter data={data} />
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