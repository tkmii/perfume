import { useState } from 'react'
import Catalog from '../components/catalog'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Sorting from '../components/Sorting'
import Title from '../components/Title'

export function PageCatalog() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Title />
      <div className="flex-wrapper">
        <Search searchTerm={searchTerm} onSearchChange={setSearchChange} />
        <Sorting />
      </div>
      <div className="page" id="page">
        <Filter />
        <Catalog searchTerm={searchTerm} />
      </div>
    </div>
  )
}