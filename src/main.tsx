import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App'
import { Home } from './components/Home'
import { SearchResults } from './components/SearchResults';
import './index.css'
import { Favorites } from './components/Favorites';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<App />} path="/">
                <Route element={<Home />} path="/" />
                <Route element={<SearchResults />} path="search" />
                <Route element={<Favorites />} path="favorites" />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
