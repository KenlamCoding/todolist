import {useState} from "react";
import Button from "./components/Button"
import InputText from "./components/InputText";
import logo from "./assets/img/icon.jpg";
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
                    <img src = {logo} className="icon" alt="icon"/>
                    <h2>TodoList</h2>
                </div>
                <div className = "addItemSection">
                        <InputText newTodo={newTodo} setNewTodo={setNewTodo} />
                        <Button name={"Add"}/>
                </div>
            </form>
        </div>
    )
}