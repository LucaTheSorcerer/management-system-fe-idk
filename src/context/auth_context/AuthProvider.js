import React, {createContext, useEffect, useReducer} from "react";

const initialState = {
    isAuthenticated: false,
    user: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const authReducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token, // Store the token if not already doing so
                };
            case 'LOGOUT':
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                };
            case 'SIGN UP':
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload.user,
                };
            default:
                return state;
        }
    };

    // const [auth, dispatch] = useReducer(authReducer, initialState);
    const [auth, dispatch] = useReducer(authReducer, initialState, () => {
        const localData = localStorage.getItem('auth');
        return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);


    return (
        <AuthContext.Provider value={{auth, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};
