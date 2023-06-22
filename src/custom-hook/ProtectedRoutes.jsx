import React from 'react'
import { Navigate } from 'react-router'
import useAuth from './useAuth'

const ProtectedRoutes = ({children}) => {
    const {currentUser}=useAuth()
    return currentUser?children:<Navigate to='/login'/>
}

export default ProtectedRoutes
