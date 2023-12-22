
// import './App.css';
import { useState } from "react";


function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);

  const addTodo = ()=>{
    if(todo !== ""){
    setTodos([...todos,todo]);
    setTodo("");
  }}

  const deleteTodo = (text)=>{
    const newTodos = todos.filter((todo)=>{
      return todo !== text;
    });
    setTodos(newTodos);
  }


  return (
    <div className="App">
        <h1>TO DO APP</h1>
        <div>
          <input type="text" name="todo" value={todo} placeholder="create your todo"
          onChange={(e)=>{setTodo(e.target.value)}}/>
          <button onClick={addTodo}>ADD</button>
        </div>

       {todos?.length>0 ?(<ul>
          {todos.map((todo,index)=>(
            <div>
              <li key={index}>{todo} <button onClick={()=>{deleteTodo(todo)}}>DELETE</button></li>
            </div>
          ))}
        </ul>):(
          <div>
            <p>No task found</p>
          </div>
        )} 
    </div>
  );
}

export default App;
