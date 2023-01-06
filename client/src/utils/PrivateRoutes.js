import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

export const PrivateRoutes = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    return (
        (isLoggedIn === "true") ? <Outlet/> : <Navigate to = "/login" ></Navigate>
    )
}
