import React, { createContext } from "react"

// Information interface

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

// initial state

export const authInitialState: AuthState = {
    isLoggedIn: false,
}

// Context interface 

export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
}

// Create context

export const AuthContext = createContext( {} as AuthContextProps )

// State provider

export const AuthProvider = ({ children }: { children:JSX.Element } ) => {
    return(
        <AuthContext.Provider value = {{
            authState: authInitialState,
            signIn: () => {}
        }}>
            { children }
        </AuthContext.Provider>
    )
}