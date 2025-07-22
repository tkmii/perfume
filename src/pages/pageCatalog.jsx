import { useState, useEffect } from "react";
import axios from 'axios';
import Catalog from '../components/catalog'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Sorting from '../components/Sorting'
import Title from '../components/Title'
import NoResultsFound from "../components/NoResultsFound";

export function PageCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null)
  const [displayedData, setDisplayedData] = useState(null)

  function onSearchChange(value) {
    setSearchTerm(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/tkmii/perfume/refs/heads/main/perfume.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setDisplayedData(data)
    }

    if (searchTerm) {
      const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedData(filteredData)
    }

  }, [searchTerm, data]);

  return (
    <div>
      <Title />
      <div className="flex-wrapper">
        <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <Sorting />
      </div>
      <div className="page" id="page">
        <Filter />
        {displayedData && displayedData.length > 0 ?
          <Catalog data={displayedData} />
          :
          <NoResultsFound />
        }

      </div>
    </div>
  )
}