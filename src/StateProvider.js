import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wraps the App and provide the Data Layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulls info from Data Layer
export const useStateValue = () => useContext(StateContext);
