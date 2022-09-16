import { Route, Routes } from "react-router-dom"
import { AlbumsRoutes } from "../albums/routes/AlbumsRoutes"
import { Contact } from "../extraPages/pages/Contact"
import { LoginPage } from "../extraPages/pages/LoginPage"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={
            <PrivateRoute>
              <AlbumsRoutes />
            </PrivateRoute>
          } />
      </Routes>
    </>
  )
}