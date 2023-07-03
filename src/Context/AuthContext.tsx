import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer"

// Information interface

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favouriteIcon?: string,
}

// initial state

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favouriteIcon: undefined,
}

// Context interface 

export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logout: () => void,
    changeFavouriteIcon: (iconName: string) => void,
    changeUsername: (username: string) => void,
    
}

// Create context

export const AuthContext = createContext( {} as AuthContextProps )

// State provider

export const AuthProvider = ({ children }: { children:JSX.Element } ) => {

    const [ authState, dispatch ] = useReducer( authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeFavouriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return(
        <AuthContext.Provider value = {{
            authState,
            signIn,
            logout,
            changeFavouriteIcon,
            changeUsername,
        }}>
            { children }
        </AuthContext.Provider>
    )
}