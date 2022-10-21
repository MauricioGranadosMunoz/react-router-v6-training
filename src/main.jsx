import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AlbumsApp } from './AlbumsApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-router-v6-training">
      <AlbumsApp/>
    </BrowserRouter>
  </React.StrictMode>
)