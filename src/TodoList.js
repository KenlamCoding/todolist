import TodoItem  from "./TodoItem"
import "./assets/list.css";
export default function TodoList({
    todos,
    toggleTask,
    deleteTodo
}){
    if (todos){
        return (
        <div className="listSection" >
            <div className="message"> 
                {/* {todos.length===0 && "NothingToDo"} */}
            </div>
            <ul>{
                
                todos.map((todo, index) => {
                return(
                    <li key = {todo.id} className = "listItemSection" >
                        <TodoItem {...todo} toggleTask={toggleTask} deleteTodo={deleteTodo}/>
                    </li>
                    )
                })} 
            </ul>
        </div >
        )
        }else{
            return (
        <div className="listSection" >
            <div className="message"> 
                {/* {todos.length===0 && "NothingToDo"} */}
            </div>
            <ul>
                
               
            </ul>
        </div >
        )
        }
}