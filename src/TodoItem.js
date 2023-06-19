import "./assets/layout.css";
export default function TodoItem({finished,id,title,toggleTask, deleteTodo}) 
{
    return (
    < div className = "toDoItem" >
        <label>
            {title}
        </label>
        <div className="action">
            <input type = "checkbox" checked = {finished} onChange={e=>toggleTask(id)} ></input>
            <button onClick={() => deleteTodo(id)}> delete </button>
        </div>
    </div>
    )
}