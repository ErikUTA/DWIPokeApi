import React, {createContext, useState, useEffect} from "react";

const initialState = {
    count: 0,
  };
  
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
      


    return (
        <GlobalContext.Provider value={{state, setState }}>
          {children}
        </GlobalContext.Provider>
      );
}