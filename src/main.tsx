import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
//import { Main } from './InitialView'
import { Product } from './components/Products';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Product/>
    
  </React.StrictMode>,
)
