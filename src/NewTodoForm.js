import {useState} from "react";
import "./assets/layout.css";
import "./assets/form.css";

export default function NewTodoForm(props){
    const [newTodo, setNewTodo] = useState("");

    function addTodos(e) {
        e.preventDefault();
        if (newTodo==="") return
        props.addTodo(newTodo)
        setNewTodo("")
    }
    return (
        <form className="newItemSection" onSubmit={addTodos}>
            <div className = "formSection">
                <h2>TodoList</h2>
            </div>
            <div className = "addItemSection">
                    <input type="text" 
                        value={newTodo}
                        onChange={e=>setNewTodo(e.target.value)} 
                        id="item">
                    </input>
                <button>Submit</button>
            </div>
        </form>
    )
}