import {useState, useEffect} from "react";
import NewTodoForm from './NewTodoForm';
import TodoList  from "./TodoList";
function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')));

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      return () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
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
    setTodo((currentTodo)=>{
      return currentTodo.filter(todo => todo.id!==id)
    })
  }

  return (
    <>
        <NewTodoForm addTodo={addTodo}/>
        < TodoList todos = {
          todos
        }
        toggleTask = {
          toggleTask
        }
        deleteTodo = {
          deleteTodo
        }
        />
    </>
  );
}

export default App;
