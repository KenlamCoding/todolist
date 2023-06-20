import {useState} from "react";
import Button from "./components/Button"
export default function NewTodoForm(props){
    const [newTodo, setNewTodo] = useState("");

    function addTodos(e) {
        e.preventDefault();
        if (newTodo==="") return
        props.addTodo(newTodo)
        setNewTodo("")
    }
    return (
        < div className = "newItemSection" >
            <form onSubmit={addTodos}>
                <div className = "formSection">
                    <h2>TodoList</h2>
                </div>
                <div className = "addItemSection">
                        <input type="text" 
                            value={newTodo}
                            onChange={e=>setNewTodo(e.target.value)} 
                            id="item"
                            placeholder="e.g. Take a cool shower">
                        </input>
                        <Button name={"Add"}/>
                </div>
            </form>
        </div>
    )
}