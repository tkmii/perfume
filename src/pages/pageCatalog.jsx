// src/pages/pageCatalog.jsx
import { useEffect } from 'react';
import { useCatalogStore } from '../store/store';
import Catalog from '../components/catalog';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';
import Title from '../components/Title';
import Error from "../components/ui/Error";
import Spinner from "../components/ui/spinner";

export function PageCatalog() {
  const {
    isLoading,
    isError,
    errorText,
    fetchData
  } = useCatalogStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Title />
      <div className="flex-wrapper">
        <Search />
        <Sorting />
      </div>
      <div className="page" id="page">
        <Filter />
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Error text={errorText} />
        ) : (
          <Catalog />
        )}
      </div>
    </div>
  );
}