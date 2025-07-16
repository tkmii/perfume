import { createRoot } from 'react-dom/client'
import './main.scss'

import Catalog from './pages/catalog'

createRoot(document.getElementById('catalog')).render(
    <Catalog />
) 
