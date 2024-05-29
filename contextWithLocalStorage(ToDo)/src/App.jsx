import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1>Hello World!</h1>
    </TodoProvider>
     
  )
}

export default App
