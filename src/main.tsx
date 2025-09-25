import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './main.scss'
import { PageCatalog } from './pages/pageCatalog'
import { PageMain } from './pages/pageMain'
import { PageCart } from './pages/pageCart'
import { PageItem } from './pages/pageItem'
import { NotFound } from './pages/NotFound'

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="catalog" element={<PageCatalog />} />
      <Route path="catalog/:id" element={<PageItem />} />
      <Route path="/cart" element={<PageCart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
