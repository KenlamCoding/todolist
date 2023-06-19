import TodoItem  from "./TodoItem"
export default function TodoList({
    todos,
    toggleTask,
    deleteTodo
}){
    return (
    <div className="listSection" >
        <div>
            {todos.length===0 && "NoThingToDo"}
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
}