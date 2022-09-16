import { Link, useParams } from "react-router-dom"

export const SingleAlbumPage = () => {
  const { id, category } = useParams();

  return (
   <>
    <h1>SingleAlbumPage</h1>
      <p>Album ID: <b>{ id }</b></p>
      <p>Album Category: <b>{ category }</b></p>
    <hr/>
    <Link to={'/'}>Back Home</Link>
   </>
  )
}