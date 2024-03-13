import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [dark, setIsDark] = useState("dark");
  return (
    <GlobalContext.Provider value={{ dark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
