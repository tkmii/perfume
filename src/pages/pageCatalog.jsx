import { useFilterStore } from '../store/store'
import { useEffect } from 'react';
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
  const displayedData = useFilterStore((state) => state.filteredData)
  const setOriginalData = useFilterStore((state) => state.setOriginalData)

  useEffect(() => {
    setOriginalData(data)
  }, [data])

  return (
    <div>
      <Title />
      <div className="flex-wrapper">
        <Search data={data} />
        <Sorting />
      </div>
      <div className="page" id="page">
        <Filter data={data} />
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Error text={errorText} />
        ) : (
          <Catalog data={displayedData} />
        )}

      </div>
    </div>
  )
}