import TodoItem  from "./TodoItem"

export default function TodoList({
    todos,
    toggleTask, 
    deleteTodo
}) {
    return (<ul>
             {
              todos.map((todo,index)=>{
                return(
                <div>
                    <TodoItem {...todo}
                    toggleTask={toggleTask}
                    deleteTodo={deleteTodo} />
                </div>
                )
              })
             } 
            </ul>
    )
}