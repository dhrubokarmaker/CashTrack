import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthenticationContext'

export const PrivateRoutes = () => {
    const {authStatus} = useAuth()
    return (
        authStatus ? <Outlet/> : <Navigate to = "/login" ></Navigate>
    )
}
