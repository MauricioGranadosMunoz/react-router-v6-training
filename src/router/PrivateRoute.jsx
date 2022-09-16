import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

    const { isLogged } = JSON.parse(localStorage.getItem('userLogged'));

    return (isLogged) 
    ? children
    : <Navigate to='/login'/>

}
