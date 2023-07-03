import { AuthState } from './AuthContext';

type authAction = 
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logout' }

export const authReducer = ( state: AuthState, action: authAction ):AuthState => {
    switch ( action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            }

        case 'changeFavIcon':
            return {
                ...state,
                favouriteIcon: action.payload,
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: 'no-username-yet',
                favouriteIcon: 'no-favIcon-yet',
            }
    
        default:
            return state;
    }
}