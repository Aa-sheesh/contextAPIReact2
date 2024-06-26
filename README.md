## Steps to initialize the context API:

1. Create the context
2. Provide the context
3. Consume the context in Child components

## Diagram for how it works

<p align="center"><img src="./diagram.png"/></p>

## contexts working

- (TodoContext.js)Create context like this-

```js
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "First ToDo",
            completed: false
        }],
        addTodo: (todo) => {},
        updateTodo: (id , todo) => {},
        deleteTodo: (id) => {},
        toggleComplete: (id) => {}
    ,
});
```

- functions not defined, will be defined in specific components

- (TodoContext.js)export a function to use these contexts like this-

```js
 export const useTodo = () =>{
    return useContext(TodoContext)
}
```

- (TodoContext.js)The wrapper that stores all these values/ library that stores all these values is-
```js
export const TodoProvider=TodoContext.Provider;
```
- (index.js)Export these contexts like-
```js
export {TodoContext,TodoProvider,useTodo} from './TodoContext';
```
- (app.jsx)Fetch the values like this-

```jsx
  <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <h1>Hello World!</h1>
      </TodoProvider>
```

# Fastest boiler plate to initialize context API:
```jsx
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
```
# Step that shows each step:
## UserContext.js
```jsx
import React from "react";
const UserContext=React.createContext();
export default UserContext;
```
## UserContextProvider.jsx
```jsx
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
````
