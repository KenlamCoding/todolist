import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import NewTodoForm from './NewTodoForm';
import TodoList  from "./TodoList";
import "./assets/layout.css";
import "./assets/form.css";
function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos'))||[]);
    useEffect(() => {
      //Sorting by name
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

  function addTodo(title){
    setTodo((currentTodos) => {
      return [
        ...currentTodos, {
          id: uuidv4(),
          title,
          finished: false
        }
      ]
    })
    setTodo((currentTodos) =>{
      let sortTodos = [...currentTodos].sort((a, b) => a.title > b.title ? 1 : -1);
      return sortTodos;
    })
  }

  function toggleTask(id){
    setTodo((currentTodos)=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {
            ...todo,
            finished: !todo.finished
          }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodo((currentTodos)=>{
      return currentTodos.filter(todo => {
        console.log(todo.id !== id)
        return todo.id !== id
      })
    })
  }

  return(
    <div className = "layout">
        <NewTodoForm addTodo={addTodo}/>
        <TodoList 
          toggleTask = {toggleTask}
          deleteTodo = {deleteTodo}
          todos = {todos}
        />
    </div>
  );
}

export default App;
