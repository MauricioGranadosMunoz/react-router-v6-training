import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../../extraPages/pages/NotFound'
import { AlbumsPage, SingleAlbumPage } from '../pages'

export const AlbumsRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='albums' element={ <AlbumsPage/> }/>
            <Route path='albums/:id/:category' element={ <SingleAlbumPage/> }/>
            <Route path='/' element={ <AlbumsPage/> }/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}
