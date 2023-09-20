// AppContext.js

import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
    signUpData:null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIGNUP_DATA':
            return { ...state, signUpData: action.payload };
        default:
            return state;
    }
};

const useAppContext = () => {
    return useContext(AppContext);
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };
