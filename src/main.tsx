import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { Main } from './components/InitialView'
//import { Product } from './components/Products';
import { Category } from './components/Categories';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     
     <Category/>
  </React.StrictMode>,
)
