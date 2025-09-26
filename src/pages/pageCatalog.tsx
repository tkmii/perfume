import { useEffect, useState } from 'react';
import { useCatalogStore } from '../store/store';
import Catalog from '../components/catalog';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';
import Title from '../components/Title';
import Error from "../components/ui/Error";
import Spinner from "../components/ui/spinner";
import { SortingProvider } from '../context/SortingContext'
import { FiltresMobProvider } from '../context/FiltresMobContext'
import { useScreenWidth } from '../hooks/useScreenWidth'

export function PageCatalog() {
  const isLoading = useCatalogStore(state => state.isLoading);
  const isError = useCatalogStore(state => state.isError);
  const errorText = useCatalogStore(state => state.errorText);
  const fetchData = useCatalogStore(state => state.fetchData);
  const calculateNotesAndChords = useCatalogStore(state => state.calculateNotesAndChords)
  const originalData = useCatalogStore(state => state.originalData)
  const device = useScreenWidth()

  useEffect(() => {
    fetchData();
    calculateNotesAndChords();
  }, [originalData]);

  return (
    <SortingProvider>
      <Title />
      <div className="flex-wrapper">
        <Search />
        {device !== 'isMobile' && (<Sorting />)}
      </div>
      <FiltresMobProvider >
        <div className="page" id="page">
        <Filter />
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Error text={errorText} />
        ) : (
          <Catalog />
        ) }
      </div>
      </FiltresMobProvider>
      
    </SortingProvider>
  );
}