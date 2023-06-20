import {useState, useEffect} from "react";
import NewTodoForm from './NewTodoForm';
import TodoList  from "./TodoList";
import "./assets/layout.css";
import "./assets/form.css";
function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')));
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  function addTodo(title){
    setTodo((currentTodos) => {
      return [
        ...currentTodos, {
          id: crypto.randomUUID(),
          title,
          finished: false
        }
      ]
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
