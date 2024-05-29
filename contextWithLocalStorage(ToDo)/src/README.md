# State variables:
onst [todos, setTodos] = useState([])
# ...prev
#const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }.
In this code, the array of todos is updated by passing of #prev todos and it is updated such that the newest todo is passed id of current date timestamp and other things of to do are passed to that object element of array.
Then, the newest one is kept on the top of the array and everyone else comes after that. 

# prev.map(())
#const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo)
  )}
This function takes id and todo and then updates in such where prev.map(prevTodo) checks each object element of the array where prev.Todo===id and if it is true then it updated to current todo passed else goes back to prevTodo

# useEffect(()=>{},[])
useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem('todos'))
  if(todos&&todos.length>0){
    setTodos(todos)
  }
},[])

useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos)
,[todos])

The first useEffect hook is used to retrieve the 'todos' from the local storage when the component is first rendered. The localStorage.getItem('todos') is used to get the 'todos' item from the local storage. The JSON.parse() function is used to convert the JSON string back into a JavaScript object. If the 'todos' exist and their length is greater than zero, the setTodos function (which is not shown in the selected code but is presumably a state setter function from the useState hook) is used to update the 'todos' state in the component. The empty array [] as the second argument to useEffect means that this effect will only run once, similar to componentDidMount in class components.

The second useEffect hook is used to store the 'todos' into the local storage whenever the 'todos' state changes. The JSON.stringify(todos) is used to convert the 'todos' object into a JSON string because local storage can only store strings. The localStorage.setItem('todos', JSON.stringify(todos)) is used to store the 'todos' item into the local storage. The [todos] as the second argument to useEffect means that this effect will run whenever the 'todos' state changes, similar to componentDidUpdate in class components.