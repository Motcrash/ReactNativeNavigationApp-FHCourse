import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer"

// Information interface

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

// initial state

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: 'Motcrash',
    favoriteIcon: 'Hola',
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

    const [authState, dispatch] = useReducer( authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    return(
        <AuthContext.Provider value = {{
            authState,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    )
}