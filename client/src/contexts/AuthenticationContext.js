import React, { useContext, createContext, useState } from 'react'

const AuthenticationContext = createContext()

export function useAuth(){
    return useContext(AuthenticationContext);
}

export function AuthenticationProvider({children}) {
    const [currentUser,setCurrentUser] = useState("")
    const [authStatus,setAuthStatus] = useState(false)
    const value = 
    {
        currentUser,
        setCurrentUser,
        authStatus,
        setAuthStatus
    }
    return (
    <AuthenticationContext.Provider value = {value}>
        {children}
    </AuthenticationContext.Provider>
    )
}
