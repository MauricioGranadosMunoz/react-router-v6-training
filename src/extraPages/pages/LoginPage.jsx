import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        const user = {
            uid: 1,
            name: 'Mauricio Granados M',
            isLogged: true
        }
        localStorage.setItem('userLogged', JSON.stringify(user));
        navigate('/albums', {
            replace: true
        });
    }
  return (
    <>
        <h1>LoginPage</h1>
        <hr/>
        <button
            onClick={onLogin}
        >
            Login
        </button>
    </>
  )
}
