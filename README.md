# Steps to initialize the context API:
1. Create the context
2. Provide the context
3. Consume the context in Child components

# Diagram for how it works
![diagram](context-PiyushGarg/context%20working.png)

# Fastest boiler plate to initialize context API:
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

# Step that shows each step:
# UserContext.js
import React from "react";
const UserContext=React.createContext();
export default UserContext;
# UserContextProvider.jsx
import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
