import React, { createContext, useState } from 'react';

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');
  return (
    <AppContext.Provider value={{ key, setKey, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
