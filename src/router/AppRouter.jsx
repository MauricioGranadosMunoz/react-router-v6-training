import { Route, Routes } from "react-router-dom"
import { AlbumsRoutes } from "../albums/routes/AlbumsRoutes"
import { Contact } from "../extraPages/pages/Contact"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<AlbumsRoutes />} />
      </Routes>
    </>
  )
}