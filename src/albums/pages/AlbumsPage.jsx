import { Link, useNavigate } from 'react-router-dom'

export const AlbumsPage = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    const user = {
      uid: null,
      name: null,
      isLogged: false
  }
  localStorage.setItem('userLogged', JSON.stringify(user));
  navigate('/login', {
      replace: true
  });
  }

  return (
    <>
      <h1>AlbumsPage</h1>
      <hr/>
      <Link to={'/contact'}>Contact Page</Link><br/>
      <Link to={'/albums/num001/panini'}>Albums 1</Link><br/>
      <Link to={'/albums/num002/pgd'}>Albums 2</Link>
      <button onClick={onLogout }>Log Out</button>
    </>
  )
}