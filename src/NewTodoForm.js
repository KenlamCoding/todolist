import {useState} from "react"

export default function NewTodoForm(props){
    const [newTodo, setNewTodo] = useState("");
      function addTodos(e) {
          e.preventDefault();
          if (newTodo==="") return

          props.addTodo(newTodo)
          setNewTodo("")
      }

    
    return (
        <form onSubmit={addTodos}>
          <div>
              <h3>New Item</h3>
              <input type="text" 
              value={newTodo} 
              onChange={e=>setNewTodo(e.target.value)} 
              id="item">
              </input>
          </div>
          <div>
              <button>Submit</button>
          </div>
        </form>
    )
}